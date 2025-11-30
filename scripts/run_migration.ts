#!/usr/bin/env ts-node

/**
 * Migration Runner Script
 *
 * This script applies SQL migrations to your Neon Postgres database.
 * It reads the DATABASE_URL from your .env file and executes the specified migration.
 *
 * Usage:
 *   npm install pg dotenv
 *   npx ts-node scripts/run_migration.ts <migration-file>
 *
 * Example:
 *   npx ts-node scripts/run_migration.ts db/migrations/001_init_tracking.sql
 */

import { Client } from 'pg';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';

// Load environment variables from .env
dotenv.config();

async function runMigration(migrationFile: string): Promise<void> {
    const databaseUrl = process.env.DATABASE_URL;

    if (!databaseUrl) {
        console.error('❌ ERROR: DATABASE_URL not found in .env file');
        process.exit(1);
    }

    // Check if migration file exists
    if (!fs.existsSync(migrationFile)) {
        console.error(`❌ ERROR: Migration file not found: ${migrationFile}`);
        process.exit(1);
    }

    // Read the migration SQL
    const migrationSql = fs.readFileSync(migrationFile, 'utf-8');
    const migrationName = path.basename(migrationFile);

    console.log(`\n📦 Running migration: ${migrationName}`);
    console.log(`🔗 Connecting to database...`);

    // Create a new client
    const client = new Client({
        connectionString: databaseUrl,
        ssl: {
            rejectUnauthorized: false, // Neon requires SSL
        },
    });

    try {
        // Connect to the database
        await client.connect();
        console.log('✅ Connected to database');

        // Execute the migration
        console.log(`\n🚀 Executing migration...`);
        await client.query(migrationSql);

        console.log(`✅ Migration completed successfully!\n`);
    } catch (error) {
        console.error('\n❌ Migration failed:');
        console.error(error);
        process.exit(1);
    } finally {
        // Close the connection
        await client.end();
        console.log('🔌 Database connection closed\n');
    }
}

// Get migration file from command line arguments
const migrationFile = process.argv[2];

if (!migrationFile) {
    console.error('Usage: npx ts-node scripts/run_migration.ts <migration-file>');
    console.error('Example: npx ts-node scripts/run_migration.ts db/migrations/001_init_tracking.sql');
    process.exit(1);
}

// Run the migration
runMigration(migrationFile);
