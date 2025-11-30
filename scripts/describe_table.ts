#!/usr/bin/env ts-node

import { Client } from 'pg';
import * as dotenv from 'dotenv';

dotenv.config();

async function describeTable(tableName: string): Promise<void> {
    const databaseUrl = process.env.DATABASE_URL;

    if (!databaseUrl) {
        console.error('❌ ERROR: DATABASE_URL not found in .env file');
        process.exit(1);
    }

    const client = new Client({
        connectionString: databaseUrl,
        ssl: {
            rejectUnauthorized: false,
        },
    });

    try {
        await client.connect();
        console.log(`\n📋 Table: ${tableName}\n`);

        // Query to get column details
        const columnQuery = `
            SELECT
                column_name,
                data_type,
                character_maximum_length,
                is_nullable,
                column_default
            FROM information_schema.columns
            WHERE table_name = $1
            ORDER BY ordinal_position;
        `;

        const columnResult = await client.query(columnQuery, [tableName]);

        console.log('Columns:');
        console.log('─'.repeat(100));
        columnResult.rows.forEach(row => {
            const nullable = row.is_nullable === 'YES' ? 'NULL' : 'NOT NULL';
            const type = row.character_maximum_length
                ? `${row.data_type}(${row.character_maximum_length})`
                : row.data_type;
            const defaultVal = row.column_default ? ` DEFAULT ${row.column_default}` : '';
            console.log(`  ${row.column_name.padEnd(20)} ${type.padEnd(30)} ${nullable}${defaultVal}`);
        });

        // Query to get indexes
        const indexQuery = `
            SELECT
                indexname,
                indexdef
            FROM pg_indexes
            WHERE tablename = $1
            ORDER BY indexname;
        `;

        const indexResult = await client.query(indexQuery, [tableName]);

        console.log('\nIndexes:');
        console.log('─'.repeat(100));
        indexResult.rows.forEach(row => {
            console.log(`  ${row.indexname}`);
            console.log(`    ${row.indexdef}`);
        });

        console.log('\n');
    } catch (error) {
        console.error('❌ Error:', error);
        process.exit(1);
    } finally {
        await client.end();
    }
}

const tableName = process.argv[2] || 'visitor_identities';
describeTable(tableName);
