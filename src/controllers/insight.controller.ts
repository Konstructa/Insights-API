import { Request, Response } from 'express';
import * as use from '../services/insight.services';

export async function getInsightById(req: Request, res:Response): Promise<Response> {
  const id = req.params.id_ideia;
  try {
    const posts = await use.getInsightIdService(id);
    return res.status(302).json({
      message: 'sucess', results: posts[0],
    });
  } catch (e) {
    const error = e as Error;
    return res.status(404).json({
      message: 'error', results: error.message,
    });
  }
}

export async function deleteInsightId(req: Request, res:Response) {
  const id = req.params.id_ideia;
  try {
    await use.deleteInsightIdService(id);
    return res.status(202).json({
      message: 'Ideia deletada',
    });
  } catch (e) {
    const error = e as Error;
    return res.status(405).json({
      message: error.message,
    });
  }
}
