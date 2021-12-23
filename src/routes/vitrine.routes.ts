import { Router } from 'express';
import * as path from '../controllers/vitrine.controller';

const router = Router();

router.route('/')
  .get(path.getVitrine);

export default router;
