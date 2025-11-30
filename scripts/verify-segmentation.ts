#!/usr/bin/env tsx

import dotenv from "dotenv";
dotenv.config();

import { query } from "../lib/db.js";

async function main() {
  console.log("\n📊 Verifying Segmentation in Database\n");

  const result = await query(
    `SELECT
       event_name,
       properties->>'email' as email,
       properties->>'segment_slug' as segment,
       properties->>'company_size_bucket' as size,
       properties->>'persona' as persona,
       occurred_at
     FROM events
     WHERE properties->>'email' LIKE 'test-%@example.com'
     ORDER BY occurred_at DESC
     LIMIT 3`
  );

  if (result.rows.length === 0) {
    console.log("❌ No test submissions found in database\n");
  } else {
    console.log("✅ Recent test submissions:\n");

    result.rows.forEach((row, idx) => {
      console.log(`${idx + 1}. ${row.email}`);
      console.log(`   Segment: ${row.segment}`);
      console.log(`   Size Bucket: ${row.size}`);
      console.log(`   Persona: ${row.persona}`);
      console.log(`   Time: ${new Date(row.occurred_at).toLocaleString()}`);
      console.log("");
    });
  }

  process.exit(0);
}

main().catch(console.error);
