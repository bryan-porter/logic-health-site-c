#!/usr/bin/env tsx

import dotenv from "dotenv";
import { randomUUID } from "crypto";
dotenv.config();

const PUBLIC_KEY = process.env.PUBLIC_API_KEY;

async function testIdentityEvent() {
  console.log("\n🧪 Testing Identity Event Logging\n");

  const testPayload = {
    anonymous_id: randomUUID(),
    crm_contact_id: `test-crm-${Date.now()}`,
    email: `test-identity-${Date.now()}@example.com`,
  };

  console.log("📋 Test Case:");
  console.log(`   Anonymous ID: ${testPayload.anonymous_id}`);
  console.log(`   CRM Contact ID: ${testPayload.crm_contact_id}`);
  console.log(`   Email: ${testPayload.email}`);

  try {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };
    if (PUBLIC_KEY) {
      headers["x-public-api-key"] = PUBLIC_KEY;
    }

    console.log("\n🔄 Calling /api/identify...");

    const response = await fetch("http://localhost:3003/api/identify", {
      method: "POST",
      headers,
      body: JSON.stringify(testPayload),
    });

    if (response.ok) {
      const result = await response.json();
      console.log("\n✅ Identity linked successfully");
      console.log("   Response:", result);
    } else {
      const error = await response.json();
      console.log(`\n❌ Failed: ${response.status}`);
      console.log("   Error:", error);
      return;
    }
  } catch (error) {
    console.error("\n❌ Error:", error);
    return;
  }

  // Wait a moment for the event to be logged
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log("\n🔍 Verifying event was logged to database...\n");

  // Import db query function
  const { query } = await import("../lib/db.js");

  const eventResult = await query(
    `SELECT
       event_name,
       anonymous_id,
       user_id,
       source,
       properties,
       occurred_at
     FROM events
     WHERE anonymous_id = $1
     ORDER BY occurred_at DESC
     LIMIT 1`,
    [testPayload.anonymous_id]
  );

  if (eventResult.rows.length === 0) {
    console.log("❌ No contact_identified event found in database\n");
  } else {
    const event = eventResult.rows[0];
    console.log("✅ Event logged successfully:\n");
    console.log(`   Event Name: ${event.event_name}`);
    console.log(`   Anonymous ID: ${event.anonymous_id}`);
    console.log(`   User ID (CRM Contact ID): ${event.user_id}`);
    console.log(`   Source: ${event.source}`);

    // Properties might already be parsed as an object (JSONB type)
    const props = typeof event.properties === 'string'
      ? JSON.parse(event.properties)
      : event.properties;

    console.log(`   Properties:`, props);
    console.log(`   Occurred At: ${new Date(event.occurred_at).toLocaleString()}`);
    console.log("");

    if (event.event_name === "contact_identified") {
      console.log("✅ Event name is correct (contact_identified)");
    } else {
      console.log(`❌ Event name is wrong: ${event.event_name}`);
    }

    if (event.source === "identify_api") {
      console.log("✅ Event source is correct (identify_api)");
    } else {
      console.log(`❌ Event source is wrong: ${event.source}`);
    }

    if (props.email === testPayload.email) {
      console.log("✅ Email in properties matches");
    } else {
      console.log(`❌ Email mismatch: ${props.email}`);
    }

    if (props.crm_contact_id === testPayload.crm_contact_id) {
      console.log("✅ CRM Contact ID in properties matches");
    } else {
      console.log(`❌ CRM Contact ID mismatch: ${props.crm_contact_id}`);
    }

    if (props.anonymous_id === testPayload.anonymous_id) {
      console.log("✅ Anonymous ID in properties matches");
    } else {
      console.log(`❌ Anonymous ID mismatch: ${props.anonymous_id}`);
    }
  }

  console.log("\n✅ Test complete!\n");
  process.exit(0);
}

testIdentityEvent().catch(console.error);
