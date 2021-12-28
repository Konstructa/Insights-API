import { Request, Response } from 'express';
import * as use from '../services/categorys.services';

export async function getNamesCategorys(req: Request, res:Response): Promise<Response> {
  try {
    const posts = await use.getNamesCategorysService();
    return res.status(302).json({ results: posts[0] });
  } catch (e) {
    const error = e as Error;
    return res.status(404).json({
      message: error.message,
    });
  }
}

export async function getElementsFromOneCategory(req: Request, res:Response): Promise<Response> {
  const page = parseInt(req.params.page, 10) || 1;
  const { category } = req.params;
  try {
    const [posts, totalInsights] = await use.getElementsFromOneCategoryService(category, page);
    const count = {
      a: page,
      b: Math.ceil(totalInsights[0].numTotal / 10),
      c: totalInsights[0].numTotal,
    };
    return res.status(302).json({
      page: count.a, results: posts[0], total_pages: count.b, total_insights: count.c,
    });
  } catch (e) {
    const error = e as Error;
    return res.status(404).json({
      message: error.message,
    });
  }
}
