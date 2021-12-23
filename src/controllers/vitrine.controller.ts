import { Request, Response } from 'express';
import * as use from '../services/vitrine.services';

export async function getVitrine(req: Request, res:Response): Promise<Response> {
  try {
    const posts = await use.getVitrineService();
    return res.status(200).send({
      results: posts[0],
    });
  } catch (e) {
    const error = e as Error;
    return res.status(500).json({ status: 400, message: error.message });
  }
}
