import { Request, Response } from 'express';
import { connect } from '../db';

export async function getAllInsights(req: Request, res:Response): Promise<Response> {
  const conn = await connect();
  const posts = await conn.query('SELECT * FROM insights');
  return res.status(200).send({
    page: 1, results: posts[0], total_pages: 500, total_results: 10000,
  });
}

export function postInsights(req: Request, res:Response) {
  return res.status(201).send({ message: ['Publique aqui sua ideia'] });
}

export function getInsightId(req: Request, res:Response) {
  const id = req.params.id_ideia;
  return res.status(201).send({ message: ['Aqui está a ideia que você está procurando', id] });
}
