#!/usr/bin/env tsx

import dotenv from "dotenv";
import { createTrackedUrl, TrackingPayload } from "../lib/emailTracking";

// Load environment variables from .env file
dotenv.config();

/**
 * CLI script to generate email tracking links
 *
 * Usage:
 *   npx tsx scripts/generate_link.ts <BASE_URL> <TARGET_URL> <CAMPAIGN_NAME> [CONTACT_ID]
 *
 * Examples:
 *   # Campaign mode (for HubSpot templates)
 *   npx tsx scripts/generate_link.ts https://logichm.com https://logichm.com/solutions/ccm ccm-launch
 *
 *   # 1:1 mode (for individual emails)
 *   npx tsx scripts/generate_link.ts https://logichm.com https://logichm.com/contact welcome-series 12345
 */

function main() {
  const args = process.argv.slice(2);

  if (args.length < 3 || args.length > 4) {
    console.error("Usage: npx tsx scripts/generate_link.ts <BASE_URL> <TARGET_URL> <CAMPAIGN_NAME> [CONTACT_ID]");
    console.error("");
    console.error("Arguments:");
    console.error("  BASE_URL      - Base URL of your site (e.g., https://logichm.com)");
    console.error("  TARGET_URL    - Final destination URL after click");
    console.error("  CAMPAIGN_NAME - Campaign identifier for analytics");
    console.error("  CONTACT_ID    - (Optional) Specific contact ID for 1:1 emails");
    console.error("");
    console.error("Examples:");
    console.error("  # Campaign mode (for HubSpot templates):");
    console.error("  npx tsx scripts/generate_link.ts https://logichm.com https://logichm.com/solutions/ccm ccm-launch");
    console.error("");
    console.error("  # 1:1 mode (for individual emails):");
    console.error("  npx tsx scripts/generate_link.ts https://logichm.com https://logichm.com/contact welcome-series 12345");
    process.exit(1);
  }

  const [baseUrl, targetUrl, campaignName, contactId] = args;

  // Validate URLs
  try {
    new URL(baseUrl);
    new URL(targetUrl);
  } catch (error) {
    console.error("Error: BASE_URL and TARGET_URL must be valid URLs");
    process.exit(1);
  }

  // Construct payload
  const payload: TrackingPayload = {
    target: targetUrl,
    campaign: campaignName,
  };

  // Add contact ID if provided (1:1 mode)
  if (contactId) {
    payload.cid = contactId;
  }

  // Generate tracking URL
  const trackedUrl = createTrackedUrl(baseUrl, payload);

  // Output logic
  console.log("");
  if (contactId) {
    // 1:1 mode: URL is ready to use as-is
    console.log("✅ 1:1 Tracking Link Generated (Contact ID embedded):");
    console.log("");
    console.log(trackedUrl);
    console.log("");
    console.log("This link is ready to use for contact ID:", contactId);
  } else {
    // Campaign mode: Append HubSpot placeholder
    const hubspotUrl = `${trackedUrl}?uid={{contact.hs_object_id}}`;
    console.log("✅ Campaign Tracking Link Generated (for HubSpot templates):");
    console.log("");
    console.log(hubspotUrl);
    console.log("");
    console.log("⚠️  Use this URL in HubSpot email templates.");
    console.log("   The {{contact.hs_object_id}} placeholder will be replaced automatically.");
  }
  console.log("");
  console.log("Campaign:", campaignName);
  console.log("Target:", targetUrl);
  console.log("");
}

main();
