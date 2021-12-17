import { Request, Response } from 'express';
import { connect } from '../sql/db';

export async function getNamesCategorys(req: Request, res:Response): Promise<Response> {
  const conn = await connect();
  const posts = await conn.query('SELECT classification FROM insights');
  return res.status(302).send({ message: ['Aqui está a lista de categorias', posts[0]] });
}

export async function getElementsFromOneCategory(req: Request, res:Response): Promise<Response> {
  const { category } = req.params;
  const conn = await connect();
  const posts = await conn.query(`SELECT * FROM insights WHERE classification = ${category}`);
  return res.status(302).send({ message: ['Aqui está os elementos da categoria que você está procurando', posts[0]] });
}
