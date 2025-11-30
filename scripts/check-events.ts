#!/usr/bin/env tsx

import dotenv from "dotenv";
dotenv.config();

import { query } from "../lib/db.js";

async function main() {
  const email = process.argv[2] || "new@pipeline.com";

  console.log(`\nSearching for events with email: ${email}\n`);

  // Check events table
  const eventsResult = await query(
    `SELECT event_name, occurred_at, anonymous_id, user_id, source, properties
     FROM events
     WHERE properties->>'email' = $1
     ORDER BY occurred_at DESC
     LIMIT 10`,
    [email]
  );

  if (eventsResult.rows.length === 0) {
    console.log("❌ No events found for this email\n");
  } else {
    console.log(`✅ Found ${eventsResult.rows.length} events:\n`);

    eventsResult.rows.forEach((row, idx) => {
      console.log(`${idx + 1}. ${row.event_name} at ${new Date(row.occurred_at).toLocaleString()}`);
      console.log(`   Anonymous ID: ${row.anonymous_id || "null"}`);
      console.log(`   User ID (CRM): ${row.user_id || "null"}`);
      console.log(`   Source: ${row.source}`);
      console.log(`   Properties:`, JSON.stringify(row.properties, null, 2));
      console.log("");
    });
  }

  process.exit(0);
}

main().catch(console.error);
