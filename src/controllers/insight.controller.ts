import { Request, Response } from 'express';
import * as use from '../services/insight.services';

export async function getInsightById(req: Request, res:Response): Promise<Response> {
  const id = req.params.id_ideia;
  try {
    const [posts, checkExists] = await use.getInsightIdService(id);
    const count = {
      exists: checkExists[0].exist,
    };
    if (count.exists > 0) {
      return res.status(302).json({
        message: 'sucess', results: posts[0],
      });
    }
    throw new Error('Insight não encontrado');
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
    const checkExists = await use.deleteInsightIdService(id);
    const count = {
      exists: checkExists[0].exist,
    };
    if (count.exists > 0) {
      return res.status(202).json({
        message: 'Ideia deletada',
      });
    }
    throw new Error('Insight não encontrado');
  } catch (e) {
    const error = e as Error;
    return res.status(404).json({
      message: error.message,
    });
  }
}
