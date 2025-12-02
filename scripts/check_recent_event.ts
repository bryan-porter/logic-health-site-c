#!/usr/bin/env tsx

import dotenv from "dotenv";
import { query } from "../lib/db";

// Load environment variables
dotenv.config();

async function main() {
  console.log("🔍 Checking most recent event in production database...\n");

  try {
    const result = await query(
      `SELECT
        event_name,
        user_id,
        properties,
        occurred_at,
        source,
        anonymous_id
      FROM events
      ORDER BY occurred_at DESC
      LIMIT 1`
    );

    if (result.rows.length === 0) {
      console.log("❌ No events found in database");
      return;
    }

    const event = result.rows[0];

    console.log("📊 Most Recent Event:");
    console.log("═".repeat(60));
    console.log(`Event Name:    ${event.event_name}`);
    console.log(`User ID:       ${event.user_id || '(null)'}`);
    console.log(`Anonymous ID:  ${event.anonymous_id || '(null)'}`);
    console.log(`Source:        ${event.source}`);
    console.log(`Occurred At:   ${event.occurred_at}`);
    console.log("\n📋 Properties:");
    console.log("─".repeat(60));

    if (event.properties) {
      const props = typeof event.properties === 'string'
        ? JSON.parse(event.properties)
        : event.properties;
      console.log(JSON.stringify(props, null, 2));
    } else {
      console.log("(no properties)");
    }

    console.log("═".repeat(60));
  } catch (error) {
    console.error("❌ Error querying database:", error);
    process.exit(1);
  }

  process.exit(0);
}

main();
