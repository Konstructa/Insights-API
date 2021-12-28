import { Request, Response } from 'express';
import { Insight } from '../interface/Insights';
import * as use from '../services/insights.services';

export async function getAllInsights(req: Request, res:Response): Promise<Response> {
  const page = parseInt(req.params.page, 10) || 1;
  try {
    const [posts, totalInsights] = await use.getAllInsightsService(page);
    const count = {
      a: page,
      b: Math.ceil(totalInsights[0].numTotal / 10),
      c: totalInsights[0].numTotal,
    };
    return res.status(200).json({
      page: count.a, results: posts[0], total_pages: count.b, total_insights: count.c,
    });
  } catch (e) {
    const error = e as Error;
    return res.status(400).json({ status: 400, message: error.message });
  }
}

export async function createInsights(req: Request, res:Response) {
  const newInsight: Insight = req.body;
  try {
    if (req.body.classification == null) {
      throw new Error('Categoria não inserida');
    }
    await use.createInsightsService(newInsight);
    return res.status(201).json({
      message: 'Ideia enviada com sucesso!',
    });
  } catch (e) {
    const error = e as Error;
    return res.status(400).json({
      message: error.message,
    });
  }
}
