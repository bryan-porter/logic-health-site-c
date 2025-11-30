#!/usr/bin/env ts-node

import { Client } from 'pg';
import * as dotenv from 'dotenv';

dotenv.config();

async function queryFormSubmissions(): Promise<void> {
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    console.error('❌ ERROR: DATABASE_URL not found in .env file');
    process.exit(1);
  }

  console.log(`\n🔍 Querying form_submitted events...\n`);

  const client = new Client({
    connectionString: databaseUrl,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  const sql = `
    SELECT
      id,
      anonymous_id,
      user_id,
      event_name,
      occurred_at,
      source,
      path,
      url,
      properties
    FROM events
    WHERE event_name = 'form_submitted'
    ORDER BY occurred_at DESC
    LIMIT 5
  `;

  try {
    await client.connect();
    const result = await client.query(sql);

    console.log('Recent form submissions:');
    console.log(JSON.stringify(result.rows, null, 2));
    console.log(`\n📊 Total form_submitted events found: ${result.rowCount}\n`);
  } catch (error) {
    console.error('Error querying events:', error);
    process.exit(1);
  } finally {
    await client.end();
  }

  process.exit(0);
}

queryFormSubmissions();
