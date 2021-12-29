import { createPool } from 'mysql2/promise';
//

export async function connect() {
  const connection = createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'insight_api',
    connectionLimit: 10,
  });

  return connection;
}
