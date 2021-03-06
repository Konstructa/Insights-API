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
      page,
      totalPages: Math.ceil(totalInsights[0].numTotal / 10),
      totalInsights: totalInsights[0].numTotal,
    };
    if (count.totalPages < count.page || count.page < 0) { throw new Error('Essa página não existe ainda'); }
    return res.status(302).json({
      page: count.page,
      results: posts[0],
      total_pages: count.totalPages,
      total_insights: count.totalInsights,
    });
  } catch (e) {
    const error = e as Error;
    return res.status(404).json({
      message: error.message,
    });
  }
}
