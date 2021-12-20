import { createPool } from 'mysql2/promise';
// import Connection from 'mysql2/typings/mysql/lib/Connection';

export async function connect() {
  const connection = createPool({
    host: process.env.HOST || 'localhost',
    user: process.env.USER || 'root',
    password: process.env.PASSWORD || '@aKFfBUvHw4C',
    database: 'insight_api',
    connectionLimit: 10,
  });

  return connection;
}
