import { connect } from '../sql/db';

export async function getVitrineService() {
  try {
    const conn = await connect();
    const posts = await conn.query(
      `(SELECT * FROM insights GROUP BY classification ORDER BY created_at DESC)
      UNION
      (SELECT * FROM insights ORDER BY created_at DESC LIMIT 1)
    `,
    );
    return posts;
  } catch (e) {
    throw new Error('Erro ao encontrar a vitrine');
  }
}
