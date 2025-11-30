#!/usr/bin/env tsx

import dotenv from "dotenv";
dotenv.config();

import { query } from "../lib/db.js";

async function main() {
  const email = process.argv[2] || "new@pipeline.com";

  console.log(`\nSearching for contact: ${email}\n`);

  const result = await query(
    `SELECT email, anonymous_id, crm_contact_id, first_seen_at, identified_at
     FROM visitor_identities
     WHERE email = $1`,
    [email]
  );

  if (result.rows.length === 0) {
    console.log("❌ No contact found with this email\n");
  } else {
    console.log("✅ Contact found:");
    console.log(JSON.stringify(result.rows[0], null, 2));
    console.log("");
  }

  process.exit(0);
}

main().catch(console.error);
