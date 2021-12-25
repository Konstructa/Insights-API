import { connect } from '../sql/db';

export async function getInsightIdService(id: string) {
  /* if const posts = await conn.query('SELECT EXISTS(SELECT * from insights WHERE id = ?' [id]); */
  try {
    const conn = await connect();
    const posts = await conn.query(`SELECT EXISTS (SELECT * FROM insights WHERE id = ${id}) as truth`);
    return posts;
  } catch (e) {
    throw new Error('Insight não encontrado');
  }
}

export async function deleteInsightIdService(id: string) {
  try {
    const conn = await connect();
    await conn.query('DELETE FROM insights WHERE id = ?', [id]);
  } catch (e) {
    throw new Error('Não encontrada');
  }
}
