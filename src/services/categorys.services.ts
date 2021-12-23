import { connect } from '../sql/db';

export async function getNamesCategorysService() {
  try {
    const conn = await connect();
    const posts = await conn.query('SELECT classification FROM insights ORDER BY created_at DESC');
    return posts;
  } catch (e) {
    throw new Error('Categoria não encontrada');
  }
}

export async function getElementsFromOneCategoryService(classification: string) {
  try {
    const conn = await connect();
    const posts = await conn.query(`
    SELECT * FROM insights WHERE classification = '${classification}' ORDER BY created_at DESC`);
    return posts;
  } catch (e) {
    throw new Error('Nenhum elemento foi encontrado.');
  }
}
