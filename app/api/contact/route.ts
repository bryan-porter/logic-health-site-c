import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";

// In-memory rate limit: 20 requests per 10 minutes per IP
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 20;
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
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  let form: Record<string, unknown> = {};

  try {
    const ct = req.headers.get("content-type") || "";
    if (ct.includes("application/json")) {
      form = await req.json();
    } else {
      const fd = await req.formData();
      fd.forEach((v, k) => {
        form[k] = typeof v === "string" ? v : v.name;
      });
    }
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid payload" },
      { status: 400 }
    );
  }

  // Honeypot check
  if (form.website && String(form.website).trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  // Validation
  const required = ["name", "email", "organization"];
  const missing = required.filter(
    (k) => !form[k] || String(form[k]).trim() === ""
  );
  if (missing.length) {
    return NextResponse.json(
      { ok: false, error: `Missing fields: ${missing.join(", ")}` },
      { status: 400 }
    );
  }

  // Check HubSpot access token
  const hubspotToken = process.env.HUBSPOT_ACCESS_TOKEN;
  if (!hubspotToken) {
    console.error("HUBSPOT_ACCESS_TOKEN is not configured");
    return NextResponse.json(
      { error: "Server configuration error" },
      { status: 500 }
    );
  }

  // ========================================
  // HubSpot Integration (Upsert Logic)
  // ========================================

  let crmContactId: string | null = null;

  // Extract first name from full name if provided
  const firstname = String(form.name).split(" ")[0];

  // Prepare HubSpot contact properties
  const contactProperties = {
    properties: {
      email: String(form.email),
      firstname,
      company: String(form.organization),
      ...(form.phone ? { phone: String(form.phone) } : {}),
      ...(form.role ? { jobtitle: String(form.role) } : {}),
      ...(form.orgType ? { org_type: String(form.orgType) } : {}),
      ...(form.ehr ? { ehr_system: String(form.ehr) } : {}),
      ...(form.provider_count ? { provider_count: String(form.provider_count) } : {}),
      ...(form.topic ? { contact_topic: String(form.topic) } : {}),
      ...(form.programs ? { programs_of_interest: String(form.programs) } : {}),
      ...(form.message ? { contact_message: String(form.message) } : {}),
      lead_source: "Contact form",
    },
  };

  try {
    // Attempt to CREATE contact
    const createResponse = await fetch(
      "https://api.hubapi.com/crm/v3/objects/contacts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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
      if (
        errorData.message &&
        errorData.message.includes("Contact already exists")
      ) {
        const existingId = errorData.existingObjectId;

        if (existingId) {
          crmContactId = existingId;
          console.log(`Contact already exists with ID: ${crmContactId}`);
        } else {
          // Fallback: Look up contact by email
          const lookupResponse = await fetch(
            `https://api.hubapi.com/crm/v3/objects/contacts/${encodeURIComponent(
              String(form.email)
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
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
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
        "HubSpot API error:",
        createResponse.status,
        await createResponse.text()
      );
    }
  } catch (hubspotError) {
    console.error("Error communicating with HubSpot:", hubspotError);
    console.error(
      "HubSpot Error message:",
      hubspotError instanceof Error ? hubspotError.message : String(hubspotError)
    );
    console.error(
      "HubSpot Error stack:",
      hubspotError instanceof Error ? hubspotError.stack : "No stack trace"
    );
    // Continue execution - don't fail the entire request if HubSpot fails
  }

  // ========================================
  // Visitor Identity Link (Database)
  // ========================================

  // Extract visitor_id from cookies or headers if available
  const visitorId = req.cookies.get("visitor_id")?.value || null;

  if (visitorId && crmContactId) {
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

      await query(upsertQuery, [visitorId, crmContactId, String(form.email)]);
      console.log(
        `Linked visitor ${visitorId} to CRM contact ${crmContactId}`
      );
    } catch (dbError) {
      console.error("Error linking visitor identity:", dbError);
      console.error(
        "DB Error message:",
        dbError instanceof Error ? dbError.message : String(dbError)
      );
      console.error(
        "DB Error stack:",
        dbError instanceof Error ? dbError.stack : "No stack trace"
      );
      // Continue - don't fail request
    }
  }

  // ========================================
  // Event Log (Database)
  // ========================================

  try {
    const eventProperties = {
      name: form.name,
      email: form.email,
      organization: form.organization,
      phone: form.phone,
      role: form.role,
      orgType: form.orgType,
      ehr: form.ehr,
      provider_count: form.provider_count,
      topic: form.topic,
      programs: form.programs,
      message: form.message,
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
      visitorId || null,
      crmContactId,
      "contact_form_submitted",
      "web",
      JSON.stringify(eventProperties),
    ]);
    console.log("Logged contact form submission event");
  } catch (dbError) {
    console.error("Error logging event:", dbError);
    console.error(
      "DB Error message:",
      dbError instanceof Error ? dbError.message : String(dbError)
    );
    console.error(
      "DB Error stack:",
      dbError instanceof Error ? dbError.stack : "No stack trace"
    );
    // Continue - don't fail request
  }

  // ========================================
  // Success Response
  // ========================================

  return NextResponse.json({ ok: true }, { status: 200 });
}
