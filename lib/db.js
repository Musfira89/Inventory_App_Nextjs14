import { Pool } from 'pg';

// Create a new connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,  // Fetches the DB URL from .env.local
});

// Query function to use in API routes
export const query = (text, params) => {
  return pool.query(text, params);
};
