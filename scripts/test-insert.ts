#!/usr/bin/env tsx

import dotenv from "dotenv";
dotenv.config();

import { query } from "../lib/db.js";

async function main() {
  const anonymousId = "66c285dc-6644-496f-a9b9-249a623ea082";
  const crmContactId = "337898292927";
  const email = "new@pipeline.com";

  console.log("\nAttempting to insert visitor identity manually...\n");
  console.log(`  anonymous_id: ${anonymousId}`);
  console.log(`  crm_contact_id: ${crmContactId}`);
  console.log(`  email: ${email}\n`);

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

    await query(upsertQuery, [anonymousId, crmContactId, email]);

    console.log("✅ Successfully inserted/updated visitor identity!\n");

    // Verify
    const checkResult = await query(
      `SELECT * FROM visitor_identities WHERE anonymous_id = $1`,
      [anonymousId]
    );

    console.log("Verification:");
    console.log(JSON.stringify(checkResult.rows[0], null, 2));
    console.log("");
  } catch (error) {
    console.error("❌ Error inserting visitor identity:");
    console.error(error);
    console.log("");
  }

  process.exit(0);
}

main().catch(console.error);
