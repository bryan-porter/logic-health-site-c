#!/usr/bin/env tsx

import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

/**
 * Debug script to test Brevo API with all lead attributes
 *
 * Usage:
 *   npx tsx scripts/debug_brevo_full.ts
 */

async function main() {
  console.log("🔍 Testing Brevo connection with full lead data...\n");

  // Check environment variables
  const apiKey = process.env.BREVO_API_KEY;
  const listId = process.env.BREVO_NURTURE_LIST_ID;

  if (!apiKey) {
    console.error("❌ BREVO_API_KEY is not configured");
    process.exit(1);
  }

  if (!listId) {
    console.error("❌ BREVO_NURTURE_LIST_ID is not configured");
    process.exit(1);
  }

  console.log(`✓ API Key found: ${apiKey.substring(0, 20)}...`);
  console.log(`✓ List ID: ${listId}\n`);

  // Create test contact with ALL attributes
  const testEmail = `debug.test.${Date.now()}@example.com`;

  const requestBody = {
    email: testEmail,
    updateEnabled: true,
    listIds: [parseInt(listId, 10)],
    attributes: {
      FIRSTNAME: "Debug",
      LASTNAME: "User",
      COMPANY: "LogicHM Debug Inc",
      JOB_TITLE: "System Admin",
      PROVIDER_COUNT: "15",
      LEAD_SOURCE: "Debug Script",

      // Custom LogicHM Fields
      LOGIC_SEGMENT: "primary-care",
      LOGIC_SIZE: "mid",
      LOGIC_PERSONA: "operations",
      LAST_FORM_ID: "debug-script-v1",

      // UTM Parameters
      UTM_SOURCE: "terminal",
      UTM_MEDIUM: "script",
      UTM_CAMPAIGN: "debugging",
      UTM_CONTENT: "full-test",
      UTM_TERM: "brevo-integration"
    }
  };

  console.log("📤 Sending request to Brevo API:");
  console.log("URL: https://api.brevo.com/v3/contacts");
  console.log("Method: POST");
  console.log("\nRequest Body:");
  console.log(JSON.stringify(requestBody, null, 2));
  console.log("\n" + "=".repeat(60) + "\n");

  try {
    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    console.log(`📥 Response Status: ${response.status} ${response.statusText}\n`);

    // Get raw response text
    const responseText = await response.text();

    if (response.ok || response.status === 201 || response.status === 204) {
      console.log("✅ SUCCESS! Contact synced to Brevo.");
      console.log("\nResponse Body:");

      if (responseText) {
        try {
          const json = JSON.parse(responseText);
          console.log(JSON.stringify(json, null, 2));
        } catch {
          console.log(responseText);
        }
      } else {
        console.log("(No response body - typical for 204 updates)");
      }

      console.log(`\n✓ Test contact created: ${testEmail}`);
      console.log("✓ All 15 attributes were accepted by Brevo");
    } else {
      console.error("❌ FAILED! Brevo rejected the request.\n");
      console.error(`Status: ${response.status} ${response.statusText}`);
      console.error("\n🔍 Full Raw Error Response:");
      console.error("─".repeat(60));

      if (responseText) {
        console.error(responseText);

        // Try to parse as JSON for better readability
        try {
          const errorJson = JSON.parse(responseText);
          console.error("\n📋 Parsed Error:");
          console.error(JSON.stringify(errorJson, null, 2));
        } catch {
          // Already printed raw text above
        }
      } else {
        console.error("(No response body)");
      }

      console.error("─".repeat(60));
      console.error("\n💡 Common Issues:");
      console.error("  1. Attribute doesn't exist in Brevo dashboard");
      console.error("  2. Attribute type mismatch (text vs number vs date)");
      console.error("  3. Attribute name is case-sensitive (must be UPPERCASE)");
      console.error("  4. List ID is invalid or doesn't exist");

      process.exit(1);
    }
  } catch (error) {
    console.error("\n❌ Network or connection error:");
    console.error(error);
    process.exit(1);
  }
}

main();
