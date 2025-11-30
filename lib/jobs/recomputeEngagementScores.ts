import { query } from "../db";
import { computeEngagementScore, DbEvent } from "../scoring";

export async function recomputeEngagementScores(): Promise<{ processed: number }> {
  // Check environment
  const hubspotToken = process.env.HUBSPOT_ACCESS_TOKEN;
  if (!hubspotToken) {
    throw new Error("HUBSPOT_ACCESS_TOKEN is not set in environment");
  }

  console.log("Fetching contacts with recent activity...");

  // Fetch distinct user_ids from events (last 60 days, limit 200)
  const contactsResult = await query(
    `SELECT DISTINCT user_id
     FROM events
     WHERE user_id IS NOT NULL
       AND occurred_at > NOW() - INTERVAL '60 days'
     LIMIT 200`,
    []
  );

  const userIds = contactsResult.rows.map((row: any) => row.user_id);
  console.log(`Found ${userIds.length} contacts to process.\n`);

  let processedCount = 0;

  // Process each contact
  for (const userId of userIds) {
    try {
      // Fetch events for this user
      const eventsResult = await query(
        `SELECT event_name, occurred_at, properties
         FROM events
         WHERE user_id = $1
           AND occurred_at > NOW() - INTERVAL '60 days'`,
        [userId]
      );

      const events: DbEvent[] = eventsResult.rows;

      // Compute engagement score
      const { score, band } = computeEngagementScore(events);

      console.log(`Contact ${userId}: Score ${score} (${band})`);

      // Sync to HubSpot
      const hubspotUrl = `https://api.hubapi.com/crm/v3/objects/contacts/${userId}`;
      const response = await fetch(hubspotUrl, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${hubspotToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          properties: {
            logic_engagement_score: String(score),
            logic_engagement_band: band,
          },
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error(
          `  ⚠️  Failed to update contact ${userId}: ${response.status} ${errorText}`
        );
      } else {
        console.log(`  ✓ Updated in HubSpot`);
        processedCount++;
      }
    } catch (error) {
      console.error(`  ⚠️  Error processing contact ${userId}:`, error);
    }
  }

  console.log(`\nDone! Processed ${processedCount} contacts.`);

  return { processed: processedCount };
}
