#!/usr/bin/env tsx

import dotenv from "dotenv";
import { query } from "../lib/db";

// Load environment variables
dotenv.config();

async function main() {
  const email = "candidate.final.test@example.com";

  console.log(`🔍 Checking database for careers submission: ${email}\n`);
  console.log("═".repeat(60));

  // ========================================
  // 1. Check visitor_identities table
  // ========================================

  console.log("\n1️⃣  VISITOR IDENTITY:");
  console.log("─".repeat(60));

  try {
    const identityResult = await query(
      `SELECT
        anonymous_id,
        crm_contact_id,
        email,
        identified_at,
        first_seen_at
      FROM visitor_identities
      WHERE email = $1
      ORDER BY identified_at DESC
      LIMIT 1`,
      [email]
    );

    if (identityResult.rows.length === 0) {
      console.log("❌ No visitor identity found for this email");
    } else {
      const identity = identityResult.rows[0];
      console.log(`✅ Found visitor identity:`);
      console.log(`   Anonymous ID:    ${identity.anonymous_id}`);
      console.log(`   CRM Contact ID:  ${identity.crm_contact_id}`);
      console.log(`   Email:           ${identity.email}`);
      console.log(`   Identified At:   ${identity.identified_at}`);
      console.log(`   First Seen At:   ${identity.first_seen_at}`);
    }
  } catch (error) {
    console.error("❌ Error querying visitor_identities:", error);
  }

  // ========================================
  // 2. Check events table for application_submitted
  // ========================================

  console.log("\n2️⃣  APPLICATION SUBMITTED EVENT:");
  console.log("─".repeat(60));

  try {
    const eventResult = await query(
      `SELECT
        event_name,
        anonymous_id,
        user_id,
        occurred_at,
        source,
        properties
      FROM events
      WHERE event_name = 'application_submitted'
        AND properties->>'email' = $1
      ORDER BY occurred_at DESC
      LIMIT 1`,
      [email]
    );

    if (eventResult.rows.length === 0) {
      console.log("❌ No application_submitted event found for this email");
    } else {
      const event = eventResult.rows[0];
      console.log(`✅ Found application_submitted event:`);
      console.log(`   Event Name:      ${event.event_name}`);
      console.log(`   Anonymous ID:    ${event.anonymous_id}`);
      console.log(`   User ID (CRM):   ${event.user_id}`);
      console.log(`   Occurred At:     ${event.occurred_at}`);
      console.log(`   Source:          ${event.source}`);

      // ========================================
      // 3. Show properties JSON
      // ========================================

      console.log("\n3️⃣  EVENT PROPERTIES:");
      console.log("─".repeat(60));

      if (event.properties) {
        const props = typeof event.properties === 'string'
          ? JSON.parse(event.properties)
          : event.properties;

        console.log(JSON.stringify(props, null, 2));

        console.log("\n📋 Key Fields Check:");
        console.log("─".repeat(60));
        console.log(`   Job Applied:     ${props.job || '(not set)'}`);
        console.log(`   Has Resume:      ${props.has_resume ? '✅ Yes' : '❌ No'}`);
        console.log(`   Full Name:       ${props.fullName || '(not set)'}`);
        console.log(`   Phone:           ${props.phone || '(not set)'}`);
        console.log(`   Location:        ${props.location || '(not set)'}`);
      } else {
        console.log("❌ No properties found");
      }
    }
  } catch (error) {
    console.error("❌ Error querying events:", error);
  }

  console.log("\n" + "═".repeat(60) + "\n");
  process.exit(0);
}

main();
