import { connect } from '../sql/db';

export async function getInsightIdService(id: string) {
  try {
    const conn = await connect();
    const checkExists = await conn.query(`SELECT EXISTS (SELECT * FROM insights WHERE id = ${id}) as exist`);
    const posts = await conn.query('SELECT * from insights WHERE id = ?', [id]);
    return [posts, JSON.parse(JSON.stringify(checkExists[0]))];
  } catch (e) {
    throw new Error('Verifique se o valor inserido está correto');
  }
}

export async function deleteInsightIdService(id: string) {
  try {
    const conn = await connect();
    const checkExists = await conn.query(`SELECT EXISTS (SELECT * FROM insights WHERE id = ${id}) as exist`);
    await conn.query('DELETE FROM insights WHERE id = ?', [id]);
    return [JSON.parse(JSON.stringify(checkExists[0]))];
  } catch (e) {
    throw new Error('Verifique se o valor inserido está correto');
  }
}
