import { createPool } from 'mysql2/promise';
// import Connection from 'mysql2/typings/mysql/lib/Connection';

export async function connect() {
  const connection = await createPool({
    host: 'localhost',
    user: 'root',
    password: '@aKFfBUvHw4C',
    database: 'insight_api',
    connectionLimit: 10,
  });

  return connection;
}
