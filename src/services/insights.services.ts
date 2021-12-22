import { connect } from '../sql/db';

export async function getAllInsightsService() {
  try {
    const conn = await connect();
    const posts = await conn.query('SELECT * FROM insights ORDER BY created_at DESC');
    /* const totalInsights = await conn.query('SELECT COUNT(*) AS quantidade FROM insights'); */
    return posts;
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

/* export async function getInsightIdService() {}

export async function deleteInsightIdService() {} */
