#!/usr/bin/env tsx

import dotenv from "dotenv";
dotenv.config();

// Use the server's PUBLIC_API_KEY for testing
const PUBLIC_KEY = process.env.PUBLIC_API_KEY;

async function testSegmentation() {
  console.log("\n🧪 Testing Segmentation Enrichment\n");

  const testCases = [
    {
      name: "Primary Care - Practice Manager - Mid Size",
      payload: {
        email: "test-primary-care@example.com",
        name: "John Practice Manager",
        role: "Practice Manager",
        organization: "Test Primary Care Clinic",
        provider_count: 10,
        form_id: "test-segmentation-1",
        visitor_id: "test-visitor-123",
        segment_slug: "primary-care",
      },
      expected: {
        segment_slug: "primary-care",
        company_size_bucket: "mid",
        persona: "operations",
      },
    },
    {
      name: "Small Hospital - CFO - Large Size",
      payload: {
        email: "test-hospital@example.com",
        name: "Jane CFO",
        role: "CFO",
        organization: "Test Hospital",
        provider_count: 50,
        form_id: "test-segmentation-2",
        visitor_id: "test-visitor-456",
        segment_slug: "small-hospital",
      },
      expected: {
        segment_slug: "small-hospital",
        company_size_bucket: "large",
        persona: "finance",
      },
    },
    {
      name: "Demo - Doctor - Small Size",
      payload: {
        email: "test-doctor@example.com",
        name: "Dr. Smith",
        role: "Doctor",
        organization: "Small Practice",
        provider_count: 3,
        form_id: "test-segmentation-3",
        visitor_id: "test-visitor-789",
        segment_slug: "demo",
      },
      expected: {
        segment_slug: "demo",
        company_size_bucket: "small",
        persona: "clinical",
      },
    },
  ];

  for (const testCase of testCases) {
    console.log(`\n📋 Test: ${testCase.name}`);
    console.log(`   Email: ${testCase.payload.email}`);
    console.log(`   Role: ${testCase.payload.role}`);
    console.log(`   Provider Count: ${testCase.payload.provider_count}`);
    console.log(`   Segment: ${testCase.payload.segment_slug}`);
    console.log(`\n   Expected Enrichment:`);
    console.log(`     - Segment: ${testCase.expected.segment_slug}`);
    console.log(`     - Size Bucket: ${testCase.expected.company_size_bucket}`);
    console.log(`     - Persona: ${testCase.expected.persona}`);

    try {
      const headers: Record<string, string> = {
        "Content-Type": "application/json",
      };
      if (PUBLIC_KEY) {
        headers["x-public-api-key"] = PUBLIC_KEY;
      }

      const response = await fetch("http://localhost:3003/api/forms/lead", {
        method: "POST",
        headers,
        body: JSON.stringify(testCase.payload),
      });

      if (response.ok) {
        console.log(`\n   ✅ Form submitted successfully`);
        console.log(`   Check HubSpot for contact: ${testCase.payload.email}`);
      } else {
        const error = await response.json();
        console.log(`\n   ❌ Failed: ${response.status}`);
        console.log(`   Error:`, error);
      }
    } catch (error) {
      console.error(`\n   ❌ Error:`, error);
    }

    // Wait a bit between requests
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  console.log("\n\n✅ Test complete! Check HubSpot to verify the segmentation fields:");
  console.log("   - logic_segment_slug");
  console.log("   - logic_company_size_bucket");
  console.log("   - logic_persona\n");
}

testSegmentation().catch(console.error);
