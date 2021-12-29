import { connect } from '../sql/db';

export async function getInsightIdService(id: string) {
  try {
    const conn = await connect();
    const checkExists = await conn.query(`SELECT EXISTS (SELECT * FROM insights WHERE id = ${id}) as exist`);
    const checkParse = JSON.parse(JSON.stringify(checkExists[0]));
    const count = {
      a: checkParse[0].exist,
    };
    if (count.a > 0) {
      const posts = await conn.query('SELECT * from insights WHERE id = ?', [id]);
      return posts;
    }
    throw new Error('Insight não encontrado');
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
