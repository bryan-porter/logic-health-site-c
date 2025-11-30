#!/usr/bin/env tsx

import dotenv from "dotenv";
dotenv.config();

import { query } from "../lib/db.js";

async function main() {
  const anonymousId = "66c285dc-6644-496f-a9b9-249a623ea082";

  console.log(`\nChecking for visitor identity with anonymous_id: ${anonymousId}\n`);

  const result = await query(
    `SELECT * FROM visitor_identities WHERE anonymous_id = $1`,
    [anonymousId]
  );

  if (result.rows.length === 0) {
    console.log("❌ No visitor identity found with this anonymous_id");
    console.log("\nThis means the INSERT into visitor_identities failed or didn't execute.\n");
  } else {
    console.log("✅ Found visitor identity:");
    console.log(JSON.stringify(result.rows[0], null, 2));
    console.log("");
  }

  // Also check all records in visitor_identities
  const allResult = await query(`SELECT anonymous_id, email, crm_contact_id FROM visitor_identities`);
  console.log(`\nTotal records in visitor_identities: ${allResult.rows.length}`);
  console.log(JSON.stringify(allResult.rows, null, 2));

  process.exit(0);
}

main().catch(console.error);
