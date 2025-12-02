import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { syncToBrevo } from '@/lib/brevo';
import { randomUUID } from 'crypto';

// ========================================
// Phone Sanitization Helper
// ========================================

/**
 * Sanitize phone number to prevent API validation failures
 * Returns clean numeric string or undefined if invalid
 */
function sanitizePhone(phone: string | undefined | null): string | undefined {
  if (!phone) return undefined;
  // Remove all non-numeric characters except '+'
  const cleaned = phone.replace(/[^\d+]/g, '').trim();
  // If it's too short to be real (e.g. "123"), return undefined to save the lead
  if (cleaned.length < 7) return undefined;
  return cleaned; // Returns clean string like "+15551234567" or "5551234567"
}

// ========================================
// Rate Limiting
// ========================================

// In-memory rate limit: 10 requests per 10 minutes per IP
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 10;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return false;
  }

  record.count += 1;
  return true;
}

export async function POST(req: NextRequest) {
  // Rate limiting
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.headers.get('x-real-ip') ||
    'unknown';

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { ok: false, error: 'Too many requests. Please try again later.' },
      { status: 429 }
    );
  }

  // Check HubSpot access token
  const hubspotToken = process.env.HUBSPOT_ACCESS_TOKEN;
  if (!hubspotToken) {
    console.error('HUBSPOT_ACCESS_TOKEN is not configured');
    return NextResponse.json(
      { ok: false, error: 'Server configuration error' },
      { status: 500 }
    );
  }

  let formData: FormData;
  try {
    formData = await req.formData();
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Invalid form data' },
      { status: 400 }
    );
  }

  // Extract form fields
  const fullName = formData.get('fullName') as string;
  const email = formData.get('email') as string;
  const rawPhone = formData.get('phone') as string;
  const location = formData.get('location') as string;
  const position = formData.get('role') as string; // role field = position/job applied for
  const licensure = formData.get('licensure') as string;
  const experience = formData.get('experience') as string;
  const preferences = formData.get('preferences') as string;
  const ehrExperience = formData.get('ehrExperience') as string;
  const other = formData.get('other') as string;
  const resumeFile = formData.get('resume') as File | null;

  // Sanitize phone number to prevent API failures
  const safePhone = sanitizePhone(rawPhone);

  // Ensure we always have a valid visitor ID (generate if missing)
  const visitorId = req.cookies.get('visitor_id')?.value || null;
  const finalVisitorId = visitorId || randomUUID();

  // Validate required fields
  if (!fullName || !email) {
    return NextResponse.json(
      { ok: false, error: 'Name and email are required' },
      { status: 400 }
    );
  }

  console.log('Processing careers application:', {
    email,
    fullName,
    position,
    hasResume: !!resumeFile,
  });

  // ========================================
  // Upload Resume to HubSpot Files API
  // ========================================

  let resumeUrl: string | null = null;

  if (resumeFile && resumeFile.size > 0) {
    try {
      const fileBuffer = await resumeFile.arrayBuffer();
      const fileBlob = new Blob([fileBuffer], { type: resumeFile.type });

      // Create FormData for HubSpot file upload
      const fileFormData = new FormData();
      fileFormData.append('file', fileBlob, resumeFile.name);
      fileFormData.append('options', JSON.stringify({
        access: 'PUBLIC_INDEXABLE',
        ttl: 'P3M', // 3 months
        duplicateValidationStrategy: 'NONE',
        duplicateValidationScope: 'ENTIRE_PORTAL',
      }));
      fileFormData.append('folderPath', '/candidates');

      const uploadResponse = await fetch(
        'https://api.hubapi.com/files/v3/files',
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${hubspotToken}`,
          },
          body: fileFormData,
        }
      );

      if (uploadResponse.ok) {
        const uploadData = await uploadResponse.json();
        resumeUrl = uploadData.url;
        console.log(`Resume uploaded to HubSpot: ${resumeUrl}`);
      } else {
        const errorText = await uploadResponse.text();
        console.error('HubSpot file upload failed:', uploadResponse.status, errorText);
        // Continue without resume link rather than failing the entire submission
      }
    } catch (uploadError) {
      console.error('Error uploading resume to HubSpot:', uploadError);
      // Continue without resume link
    }
  }

  // ========================================
  // HubSpot Contact Creation/Update
  // ========================================

  let crmContactId: string | null = null;

  // Split full name into first and last
  const nameParts = fullName.trim().split(' ');
  const firstname = nameParts[0] || '';
  const lastname = nameParts.slice(1).join(' ') || '';

  // Combine additional fields into a summary message
  const applicationSummary = [
    licensure && `Licensure: ${licensure}`,
    experience && `Experience: ${experience}`,
    preferences && `Work Preferences: ${preferences}`,
    ehrExperience && `EHR Experience: ${ehrExperience}`,
    other && `Additional Notes: ${other}`,
  ]
    .filter(Boolean)
    .join('\n\n');

  // Prepare HubSpot contact properties
  const contactProperties = {
    properties: {
      email,
      firstname,
      lastname,
      ...(safePhone ? { phone: safePhone } : {}),
      ...(location ? { city: location } : {}),
      ...(position ? { job_applied_for: position } : {}),
      ...(resumeUrl ? { resume_link: resumeUrl } : {}),
      ...(applicationSummary ? { message: applicationSummary } : {}),
      lifecyclestage: 'other',
      applicant_status: 'New',
      lead_source: 'Careers application',
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
      // Contact already exists
      const errorData = await createResponse.json();

      if (
        errorData.message &&
        errorData.message.includes('Contact already exists')
      ) {
        const existingId = errorData.existingObjectId;

        if (existingId) {
          crmContactId = existingId;
          console.log(`Contact already exists with ID: ${crmContactId}`);
        } else {
          // Fallback: Look up contact by email
          const lookupResponse = await fetch(
            `https://api.hubapi.com/crm/v3/objects/contacts/${encodeURIComponent(
              email
            )}?idProperty=email`,
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
      console.error(
        'HubSpot API error:',
        createResponse.status,
        await createResponse.text()
      );
    }
  } catch (hubspotError) {
    console.error('Error communicating with HubSpot:', hubspotError);
    // Continue execution - don't fail the entire request
  }

  // ========================================
  // Brevo Integration (Email Nurturing)
  // ========================================

  // Sync career applicants to Brevo for nurturing campaigns
  await syncToBrevo({
    email,
    firstName: firstname,
    lastName: lastname,
    phone: safePhone,
    company: location, // Using location as a proxy for company/organization
    role: position,
    message: applicationSummary,
    leadSource: 'Careers application',
  });

  // ========================================
  // Visitor Identity Link (Database)
  // ========================================

  if (crmContactId) {
    try {
      const upsertQuery = `
        INSERT INTO visitor_identities (anonymous_id, crm_contact_id, email, identified_at, first_seen_at)
        VALUES ($1, $2, $3, NOW(), NOW())
        ON CONFLICT (anonymous_id)
        DO UPDATE SET
          crm_contact_id = $2,
          email = COALESCE(visitor_identities.email, $3),
          identified_at = COALESCE(visitor_identities.identified_at, NOW())
      `;

      await query(upsertQuery, [finalVisitorId, crmContactId, email]);
      console.log(
        `Linked visitor ${finalVisitorId} to CRM contact ${crmContactId}`
      );
    } catch (dbError) {
      console.error('Error linking visitor identity:', dbError);
      // Continue - don't fail request
    }
  }

  // ========================================
  // Event Log (Database)
  // ========================================

  try {
    const eventProperties = {
      job: position,
      has_resume: !!resumeUrl,
      fullName,
      email,
      phone: safePhone,
      location,
      licensure,
      experience,
      preferences,
      ehrExperience,
      other,
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
      finalVisitorId,
      crmContactId,
      'application_submitted',
      'web',
      JSON.stringify(eventProperties),
    ]);
    console.log('Logged application_submitted event');
  } catch (dbError) {
    console.error('Error logging event:', dbError);
    // Continue - don't fail request
  }

  // ========================================
  // Success Response
  // ========================================

  return NextResponse.json({ ok: true }, { status: 200 });
}
