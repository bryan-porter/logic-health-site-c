#!/usr/bin/env tsx

import dotenv from "dotenv";
import { query } from "../lib/db";

dotenv.config();

async function main() {
  console.log("🔍 Fetching most recent application_submitted event (RAW)...\n");

  const result = await query(`
    SELECT
      event_name,
      anonymous_id,
      user_id,
      occurred_at,
      source,
      properties
    FROM events
    WHERE event_name = 'application_submitted'
    ORDER BY occurred_at DESC
    LIMIT 1
  `);

  if (result.rows.length === 0) {
    console.log("❌ No application_submitted events found\n");
    process.exit(0);
  }

  const event = result.rows[0];

  console.log("═".repeat(70));
  console.log("EVENT DETAILS:");
  console.log("═".repeat(70));
  console.log(`Event Name:    ${event.event_name}`);
  console.log(`Anonymous ID:  ${event.anonymous_id}`);
  console.log(`User ID (CRM): ${event.user_id || '(null)'}`);
  console.log(`Occurred At:   ${event.occurred_at}`);
  console.log(`Source:        ${event.source}`);

  console.log("\n" + "═".repeat(70));
  console.log("PROPERTIES (RAW):");
  console.log("═".repeat(70));

  if (event.properties) {
    // Parse if it's a string, otherwise use as-is
    const props = typeof event.properties === 'string'
      ? JSON.parse(event.properties)
      : event.properties;

    console.log(JSON.stringify(props, null, 2));

    console.log("\n" + "═".repeat(70));
    console.log("KEY FIELDS:");
    console.log("═".repeat(70));
    console.log(`Full Name:     ${props.fullName || '(not set)'}`);
    console.log(`Email:         ${props.email || '(not set)'}`);
    console.log(`Phone:         ${props.phone || '(not set)'}`);
    console.log(`Job Applied:   ${props.job || '(not set)'}`);
    console.log(`Location:      ${props.location || '(not set)'}`);
    console.log(`Has Resume:    ${props.has_resume ? '✅ Yes' : '❌ No'}`);
    console.log(`Licensure:     ${props.licensure || '(not set)'}`);
    console.log(`Experience:    ${props.experience || '(not set)'}`);
  } else {
    console.log("❌ Properties is null");
  }

  console.log("\n" + "═".repeat(70) + "\n");
  process.exit(0);
}

main();
