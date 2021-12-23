import { Request, Response } from 'express';
import * as use from '../services/categorys.services';

export async function getNamesCategorys(req: Request, res:Response): Promise<Response> {
  try {
    const posts = await use.getNamesCategorysService();
    return res.status(302).send({ results: posts[0] });
  } catch (e) {
    const error = e as Error;
    return res.status(404).send({
      message: error.message,
    });
  }
}

export async function getElementsFromOneCategory(req: Request, res:Response): Promise<Response> {
  const classification = req.params.category;
  try {
    const posts = await use.getElementsFromOneCategoryService(classification);
    return res.status(302).send({ results: posts[0] });
  } catch (e) {
    const error = e as Error;
    return res.status(404).send({
      message: error.message,
    });
  }
}
