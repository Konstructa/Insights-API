import { Request, Response } from 'express';
import { connect } from '../sql/db';

export async function getNamesCategorys(req: Request, res:Response): Promise<Response> {
  const conn = await connect();
  const ver = await conn.query('SELECT classification FROM insights ORDER BY created_at DESC');
  return res.status(302).send({ message: ['Aqui está a lista de categorias', ver[0]] });
}

export async function getElementsFromOneCategory(req: Request, res:Response): Promise<Response> {
  const classification = req.params.category;
  const conn = await connect();
  const posts = await conn.query(`
    SELECT * FROM insights WHERE classification = '${classification}' ORDER BY created_at DESC`);
  return res.status(302).send({ message: ['Aqui está os elementos da categoria que você está procurando', posts[0]] });
}
