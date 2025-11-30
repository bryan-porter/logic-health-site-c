import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { verifyPublicApiKey } from '@/lib/apiAuth';

// ========================================
// Segmentation Helpers
// ========================================

/**
 * Map provider count to company size bucket
 */
function getCompanySizeBucket(count: string | number | undefined): string | null {
  if (!count) return null;

  const num = typeof count === 'string' ? parseInt(count, 10) : count;
  if (isNaN(num)) return null;

  if (num <= 5) return "small";
  if (num <= 25) return "mid";
  return "large";
}

/**
 * Map role to persona tag
 */
function getPersonaTag(role: string | undefined): string | null {
  if (!role) return null;

  const normalized = role.toLowerCase();

  if (normalized.includes("finance") || normalized.includes("cfo") || normalized.includes("revenue")) {
    return "finance";
  }

  if (normalized.includes("ops") || normalized.includes("operation") ||
      normalized.includes("practice") || normalized.includes("manager") ||
      normalized.includes("admin")) {
    return "operations";
  }

  if (normalized.includes("clinical") || normalized.includes("md") ||
      normalized.includes("do") || normalized.includes("doctor") ||
      normalized.includes("nurse") || normalized.includes("provider")) {
    return "clinical";
  }

  return "other";
}

interface LeadFormPayload {
  name?: string;
  email: string;
  role?: string;
  organization?: string;
  provider_count?: string | number;
  visitor_id?: string;
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  utm_content?: string | null;
  utm_term?: string | null;
  form_id?: string;
  segment_slug?: string | null;
}

interface HubSpotContact {
  properties: {
    email: string;
    firstname?: string;
    jobtitle?: string;
    company?: string;
    provider_count?: string;
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    utm_content?: string;
    utm_term?: string;
    last_form_id?: string;
    lead_source?: string;
    logic_segment_slug?: string;
    logic_company_size_bucket?: string;
    logic_persona?: string;
  };
}

export async function POST(request: NextRequest) {
  if (!verifyPublicApiKey(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // Parse and validate request body
    const body: LeadFormPayload = await request.json();

    if (!body.email) {
      return NextResponse.json(
        { error: 'email is required' },
        { status: 400 }
      );
    }

    // Check HubSpot access token
    const hubspotToken = process.env.HUBSPOT_ACCESS_TOKEN;
    if (!hubspotToken) {
      console.error('HUBSPOT_ACCESS_TOKEN is not configured');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // ========================================
    // HubSpot Integration (Upsert Logic)
    // ========================================

    let crmContactId: string | null = null;

    // Extract first name from full name if provided
    const firstname = body.name?.split(' ')[0];

    // Derive segmentation tags
    const companySizeBucket = getCompanySizeBucket(body.provider_count);
    const personaTag = getPersonaTag(body.role);

    // Prepare HubSpot contact properties
    const contactProperties: HubSpotContact = {
      properties: {
        email: body.email,
        ...(firstname && { firstname }),
        ...(body.role && { jobtitle: body.role }),
        ...(body.organization && { company: body.organization }),
        ...(body.provider_count && { provider_count: String(body.provider_count) }),
        ...(body.utm_source && { utm_source: body.utm_source }),
        ...(body.utm_medium && { utm_medium: body.utm_medium }),
        ...(body.utm_campaign && { utm_campaign: body.utm_campaign }),
        ...(body.utm_content && { utm_content: body.utm_content }),
        ...(body.utm_term && { utm_term: body.utm_term }),
        ...(body.form_id && { last_form_id: body.form_id }),
        lead_source: 'Website form',
        ...(body.segment_slug && { logic_segment_slug: body.segment_slug }),
        ...(companySizeBucket && { logic_company_size_bucket: companySizeBucket }),
        ...(personaTag && { logic_persona: personaTag }),
      },
    };

    try {
      // Attempt to CREATE contact
      const createResponse = await fetch(
        'https://api.hubapi.com/crm/v3/objects/contacts',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${hubspotToken}`,
          },
          body: JSON.stringify(contactProperties),
        }
      );

      if (createResponse.ok) {
        const data = await createResponse.json();
        crmContactId = data.id;
        console.log(`Created new HubSpot contact: ${crmContactId}`);
      } else if (createResponse.status === 409) {
        // Contact already exists - extract ID from error response
        const errorData = await createResponse.json();

        // HubSpot 409 response often includes the existing contact ID
        if (errorData.message && errorData.message.includes('Contact already exists')) {
          // Try to extract ID from error message or use fallback lookup
          const existingId = errorData.existingObjectId;

          if (existingId) {
            crmContactId = existingId;
            console.log(`Contact already exists with ID: ${crmContactId}`);
          } else {
            // Fallback: Look up contact by email
            const lookupResponse = await fetch(
              `https://api.hubapi.com/crm/v3/objects/contacts/${encodeURIComponent(body.email)}?idProperty=email`,
              {
                headers: {
                  Authorization: `Bearer ${hubspotToken}`,
                },
              }
            );

            if (lookupResponse.ok) {
              const lookupData = await lookupResponse.json();
              crmContactId = lookupData.id;
              console.log(`Retrieved existing contact ID: ${crmContactId}`);
            }
          }

          // Update the existing contact with new data
          if (crmContactId) {
            await fetch(
              `https://api.hubapi.com/crm/v3/objects/contacts/${crmContactId}`,
              {
                method: 'PATCH',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${hubspotToken}`,
                },
                body: JSON.stringify(contactProperties),
              }
            );
            console.log(`Updated existing HubSpot contact: ${crmContactId}`);
          }
        }
      } else {
        console.error('HubSpot API error:', createResponse.status, await createResponse.text());
      }
    } catch (hubspotError) {
      console.error('Error communicating with HubSpot:', hubspotError);
      // Continue execution - don't fail the entire request if HubSpot fails
    }

    // ========================================
    // Visitor Identity Link (Database)
    // ========================================

    if (body.visitor_id && crmContactId) {
      try {
        // Upsert visitor identity
        const upsertQuery = `
          INSERT INTO visitor_identities (anonymous_id, crm_contact_id, email, identified_at, first_seen_at)
          VALUES ($1, $2, $3, NOW(), NOW())
          ON CONFLICT (anonymous_id)
          DO UPDATE SET
            crm_contact_id = $2,
            email = COALESCE(visitor_identities.email, $3),
            identified_at = COALESCE(visitor_identities.identified_at, NOW())
        `;

        await query(upsertQuery, [body.visitor_id, crmContactId, body.email]);
        console.log(`Linked visitor ${body.visitor_id} to CRM contact ${crmContactId}`);
      } catch (dbError) {
        console.error('Error linking visitor identity:', dbError);
        console.error('DB Error message:', dbError instanceof Error ? dbError.message : String(dbError));
        console.error('DB Error stack:', dbError instanceof Error ? dbError.stack : 'No stack trace');
        // Continue - don't fail request
      }
    }

    // ========================================
    // Event Log (Database)
    // ========================================

    try {
      const eventProperties = {
        name: body.name,
        email: body.email,
        role: body.role,
        organization: body.organization,
        provider_count: body.provider_count,
        form_id: body.form_id,
        utm_source: body.utm_source,
        utm_medium: body.utm_medium,
        utm_campaign: body.utm_campaign,
        utm_content: body.utm_content,
        utm_term: body.utm_term,
        segment_slug: body.segment_slug,
        company_size_bucket: companySizeBucket,
        persona: personaTag,
      };

      const eventQuery = `
        INSERT INTO events (
          anonymous_id,
          user_id,
          event_name,
          occurred_at,
          source,
          properties
        )
        VALUES ($1, $2, $3, NOW(), $4, $5)
      `;

      await query(eventQuery, [
        body.visitor_id || null,
        crmContactId,
        'form_submitted',
        'web',
        JSON.stringify(eventProperties),
      ]);
      console.log('Logged form submission event');
    } catch (dbError) {
      console.error('Error logging event:', dbError);
      console.error('DB Error message:', dbError instanceof Error ? dbError.message : String(dbError));
      console.error('DB Error stack:', dbError instanceof Error ? dbError.stack : 'No stack trace');
      // Continue - don't fail request
    }

    // ========================================
    // Success Response
    // ========================================

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error('Error processing lead form submission:', error);
    console.error('Error message:', error instanceof Error ? error.message : String(error));
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    return NextResponse.json(
      { error: 'Server error', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
