#!/usr/bin/env tsx

import dotenv from "dotenv";
dotenv.config();

import { recomputeEngagementScores } from "../lib/jobs/recomputeEngagementScores.js";

async function main() {
  try {
    console.log("Starting engagement score recomputation...\n");

    const result = await recomputeEngagementScores();

    console.log(`\n✅ Successfully processed ${result.processed} contacts`);
    process.exit(0);
  } catch (error) {
    console.error("❌ Error running engagement score recomputation:");
    console.error(error);
    process.exit(1);
  }
}

main();
