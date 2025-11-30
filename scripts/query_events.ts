#!/usr/bin/env ts-node

import { Client } from 'pg';
import * as dotenv from 'dotenv';

dotenv.config();

async function queryEvents(): Promise<void> {
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    console.error('❌ ERROR: DATABASE_URL not found in .env file');
    process.exit(1);
  }

  const anonymousId = '66c285dc-6644-496f-a9b9-249a623ea082';

  console.log(`\n🔍 Querying events for anonymous_id: ${anonymousId}\n`);

  const client = new Client({
    connectionString: databaseUrl,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  const sql = `
    SELECT *
    FROM events
    WHERE anonymous_id = $1
    ORDER BY occurred_at DESC
  `;

  try {
    await client.connect();
    const result = await client.query(sql, [anonymousId]);

    console.log('Results:');
    console.log(JSON.stringify(result.rows, null, 2));
    console.log(`\n📊 Total events found: ${result.rowCount}\n`);
  } catch (error) {
    console.error('Error querying events:', error);
    process.exit(1);
  } finally {
    await client.end();
  }

  process.exit(0);
}

queryEvents();
