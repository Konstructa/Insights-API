import { Request, Response } from 'express';
import { Insight } from '../interface/Insights';
import * as use from '../services/insights.services';

export async function getAllInsights(req: Request, res:Response): Promise<Response> {
  try {
    const [posts, totalInsights] = await use.getAllInsightsService();
    return res.status(200).send({
      page: 1, results: posts[0], total_pages: 1, total_results: totalInsights[0],
    });
  } catch (e) {
    const error = e as Error;
    return res.status(400).json({ status: 400, message: error.message });
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
    const error = e as Error;
    return res.status(400).send({
      message: error.message,
    });
  }
}

export async function getInsightById(req: Request, res:Response): Promise<Response> {
  const id = req.params.id_ideia;
  try {
    const posts = await use.getInsightIdService(id);
    return res.status(302).send({
      message: 'sucess', results: posts[0],
    });
  } catch (e) {
    const error = e as Error;
    return res.status(404).send({
      message: error.message,
    });
  }
}

export async function deleteInsightId(req: Request, res:Response) {
  const id = req.params.id_ideia;
  try {
    await use.deleteInsightIdService(id);
    return res.status(202).send({
      message: 'Ideia deletada',
    });
  } catch (e) {
    const error = e as Error;
    return res.status(405).send({
      message: error.message,
    });
  }
}
