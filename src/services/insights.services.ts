import { connect } from '../sql/db';

export async function getAllInsightsService(page: number) {
  const skip = (page - 1) * 2;
  try {
    const conn = await connect();
    const posts = await conn.query(`SELECT * FROM insights ORDER BY created_at DESC LIMIT ${skip},2`);
    const totalInsights = await conn.query('SELECT COUNT(*) AS numTotal FROM insights');

    return [posts, totalInsights];
  } catch (e) {
    throw new Error('Erro ao encontrar os insights');
  }
}

export async function createInsightsService(register: any) {
  try {
    const conn = await connect();
    await conn.query('INSERT INTO insights SET ?', [register]);
  } catch (e) {
    throw new Error('Não conseguimos adicionar sua ideia, verifique os dados novamente');
  }
}
