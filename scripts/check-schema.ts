#!/usr/bin/env tsx

import dotenv from "dotenv";
dotenv.config();

import { query } from "../lib/db.js";

async function main() {
  console.log("\nChecking visitor_identities table schema:\n");

  const schemaResult = await query(
    `SELECT column_name, data_type, is_nullable, column_default
     FROM information_schema.columns
     WHERE table_name = $1
     ORDER BY ordinal_position`,
    ["visitor_identities"]
  );

  schemaResult.rows.forEach((row) => {
    console.log(
      `  ${row.column_name.padEnd(20)} ${row.data_type.padEnd(25)} ${
        row.is_nullable === "YES" ? "NULL" : "NOT NULL"
      } ${row.column_default || ""}`
    );
  });

  console.log("\n");

  process.exit(0);
}

main().catch(console.error);
