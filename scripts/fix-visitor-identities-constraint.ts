#!/usr/bin/env tsx

import dotenv from "dotenv";
dotenv.config();

import { query } from "../lib/db.js";

async function main() {
  console.log("\nAdding UNIQUE constraint to visitor_identities.anonymous_id...\n");

  try {
    // Add unique constraint
    await query(`
      ALTER TABLE visitor_identities
      ADD CONSTRAINT visitor_identities_anonymous_id_key UNIQUE (anonymous_id)
    `);

    console.log("✅ Successfully added UNIQUE constraint!");
    console.log("\nNow the ON CONFLICT (anonymous_id) clause will work correctly.\n");
  } catch (error: any) {
    if (error.code === "42P07") {
      console.log("✅ Constraint already exists - nothing to do!\n");
    } else {
      console.error("❌ Error adding constraint:");
      console.error(error);
      console.log("");
      process.exit(1);
    }
  }

  process.exit(0);
}

main().catch(console.error);
