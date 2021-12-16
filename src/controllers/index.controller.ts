import { Request, Response } from 'express';

export function indexWelcome(req: Request, res: Response) {
  return res.status(200).send({
    menssage: ['Essa é uma API de sugestões de cursos das áreas de Front-End, Back-End, Mobile e Design'],
  });
}
