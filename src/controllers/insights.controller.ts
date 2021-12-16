import { Request, Response } from 'express';
import { connect } from '../sql/db';

export async function getAllInsights(req: Request, res:Response): Promise<Response> {
  const conn = await connect();
  const posts = await conn.query('SELECT * FROM insights');
  const totalInsights = await conn.query('SELECT COUNT(*) AS quantidade FROM insights');
  return res.status(200).send({
    page: 1, results: posts[0], total_pages: 1, quantidade: totalInsights[0],
  });
}

export function postInsights(req: Request, res:Response) {
  return res.status(201).send({ message: ['Publique aqui sua ideia'] });
}

export async function getInsightId(req: Request, res:Response): Promise<Response> {
  const id = req.params.id_ideia;
  const conn = await connect();
  const posts = await conn.query(`SELECT * FROM insights WHERE id = ${id}`);
  return res.status(302).send({ message: ['Aqui está a ideia que você está procurando', posts[0]] });
}

export function deleteInsightId(req: Request, res:Response) {
  const id = req.params.id_ideia;
  return res.status(405).send({ message: ['Você não pode deletar uma ideia', id] });
}
