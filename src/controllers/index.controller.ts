import { Request, Response } from 'express';

export function indexWelcome(req: Request, res: Response) {
  return res.status(200).send({ menssage: ['Welcome To My API', 2, 'https://www.youtube.com/watch?v=TGbiY6015Wg&list=PLWgD0gfm500EMEDPyb3Orb28i7HK5_DkR&index=3'] });
}
