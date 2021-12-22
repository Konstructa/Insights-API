import { Request, Response } from 'express';
import { connect } from '../sql/db';
import { Insight } from '../interface/Insights';
import * as use from '../services/insights.services';

export async function getAllInsights(req: Request, res:Response): Promise<Response> {
  try {
    const posts = await use.getAllInsightsService();
    return res.status(200).send({
      page: 1, results: posts[0], total_pages: 1, quantidade: 'inserir',
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: 'Não conseguimos encontrar os elementos' });
  }
}

export async function createInsights(req: Request, res:Response) {
  const newInsight: Insight = req.body;
  try {
    await use.createInsightsService(newInsight);
    return res.status(201).send({
      message: 'Ideia enviada com sucesso!',
    });
  } catch (e) {
    return res.status(400).send({
      message: 'Não conseguimos adicionar sua ideia, verifique os dados novamente',
    });
  }
}

export async function getInsightId(req: Request, res:Response): Promise<Response> {
  const id = req.params.id_ideia;
  const conn = await connect();
  const posts = await conn.query('SELECT * FROM insights WHERE id = ?', [id]);
  return res.status(200).send({
    message: 'sucess', results: posts[0],
  });
}

export async function deleteInsightId(req: Request, res:Response) {
  const id = req.params.id_ideia;
  const conn = await connect();
  const posts = await conn.query('DELETE * FROM insights WHERE id = ?', [id]);
  return res.status(405).send({
    message: ['Você não pode deletar uma ideia', posts[0]],
  });
}
