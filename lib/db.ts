import { Pool, QueryResult, QueryResultRow } from 'pg';

// Create a single shared Pool instance
// This connection pool is reused across all requests
let pool: Pool | null = null;

function getPool(): Pool {
  if (!pool) {
    const databaseUrl = process.env.DATABASE_URL;

    if (!databaseUrl) {
      throw new Error(
        'DATABASE_URL is not defined in environment variables. ' +
        'Please add DATABASE_URL to your .env file.'
      );
    }

    pool = new Pool({
      connectionString: databaseUrl,
      ssl: {
        rejectUnauthorized: false, // Required for Neon
      },
      // Optional: Configure pool settings
      max: 20, // Maximum number of clients in the pool
      idleTimeoutMillis: 30000, // Close idle clients after 30 seconds
      connectionTimeoutMillis: 2000, // Return an error after 2 seconds if connection can't be established
    });

    // Handle pool errors
    pool.on('error', (err) => {
      console.error('Unexpected error on idle database client', err);
    });
  }

  return pool;
}

/**
 * Execute a SQL query using the connection pool
 * @param text - The SQL query string
 * @param params - Optional array of query parameters
 * @returns QueryResult from pg
 */
export async function query<T extends QueryResultRow = any>(
  text: string,
  params?: any[]
): Promise<QueryResult<T>> {
  const pool = getPool();

  try {
    const start = Date.now();
    const result = await pool.query<T>(text, params);
    const duration = Date.now() - start;

    // Log slow queries (over 1 second) in development
    if (process.env.NODE_ENV === 'development' && duration > 1000) {
      console.log('Slow query detected:', {
        text,
        duration: `${duration}ms`,
        rows: result.rowCount,
      });
    }

    return result;
  } catch (error) {
    console.error('Database query error:', {
      query: text,
      params,
      error: error instanceof Error ? error.message : String(error),
    });
    throw error;
  }
}

/**
 * Close the database pool (useful for cleanup in tests or serverless functions)
 */
export async function closePool(): Promise<void> {
  if (pool) {
    await pool.end();
    pool = null;
  }
}
