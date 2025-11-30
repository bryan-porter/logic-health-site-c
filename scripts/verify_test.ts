#!/usr/bin/env ts-node

import { query } from '../lib/db.js';
import * as dotenv from 'dotenv';

dotenv.config();

async function verifyTest(): Promise<void> {
  console.log('\n📊 Checking latest event...\n');

  const eventResult = await query('SELECT * FROM events ORDER BY id DESC LIMIT 1');
  console.log('Latest Event:');
  console.log(JSON.stringify(eventResult.rows[0], null, 2));

  console.log('\n📊 Checking visitor identity...\n');

  const identityResult = await query('SELECT * FROM visitor_identities ORDER BY id DESC LIMIT 1');
  console.log('Latest Visitor Identity:');
  console.log(JSON.stringify(identityResult.rows[0], null, 2));

  process.exit(0);
}

verifyTest();
