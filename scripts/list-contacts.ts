#!/usr/bin/env tsx

import dotenv from "dotenv";
dotenv.config();

import { query } from "../lib/db.js";

async function main() {
  console.log("\nFetching all contacts from visitor_identities...\n");

  const result = await query(
    `SELECT email, crm_contact_id, anonymous_id, first_seen_at, identified_at
     FROM visitor_identities
     ORDER BY identified_at DESC NULLS LAST
     LIMIT 50`
  );

  if (result.rows.length === 0) {
    console.log("❌ No contacts found in the database\n");
  } else {
    console.log(`✅ Found ${result.rows.length} contacts:\n`);

    result.rows.forEach((row, idx) => {
      console.log(`${idx + 1}. ${row.email}`);
      console.log(`   CRM ID: ${row.crm_contact_id || "null"}`);
      console.log(`   Anonymous ID: ${row.anonymous_id || "null"}`);
      console.log(
        `   First Seen: ${
          row.first_seen_at
            ? new Date(row.first_seen_at).toLocaleString()
            : "null"
        }`
      );
      console.log(
        `   Identified: ${
          row.identified_at
            ? new Date(row.identified_at).toLocaleString()
            : "null"
        }`
      );
      console.log("");
    });
  }

  process.exit(0);
}

main().catch(console.error);
