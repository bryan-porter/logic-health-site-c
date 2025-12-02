#!/usr/bin/env tsx

import dotenv from "dotenv";
import { query } from "../lib/db";

dotenv.config();

async function main() {
  console.log("🔍 Checking for ALL application_submitted events...\n");

  const result = await query(`
    SELECT
      event_name,
      occurred_at,
      properties->>'email' as email,
      properties->>'fullName' as name,
      properties->>'job' as job,
      properties->>'has_resume' as has_resume
    FROM events
    WHERE event_name = 'application_submitted'
    ORDER BY occurred_at DESC
    LIMIT 10
  `);

  if (result.rows.length === 0) {
    console.log("❌ No application_submitted events found in database\n");
    console.log("This means:");
    console.log("  1. No careers applications have been submitted yet");
    console.log("  2. Or the careers form handler has an error\n");
  } else {
    console.log(`✅ Found ${result.rows.length} recent application(s):\n`);
    console.log("═".repeat(70));

    result.rows.forEach((row, i) => {
      console.log(`\n${i + 1}. ${row.occurred_at}`);
      console.log(`   Email:      ${row.email}`);
      console.log(`   Name:       ${row.name}`);
      console.log(`   Job:        ${row.job}`);
      console.log(`   Has Resume: ${row.has_resume === 'true' ? '✅ Yes' : '❌ No'}`);
    });

    console.log("\n" + "═".repeat(70));
  }

  process.exit(0);
}

main();
