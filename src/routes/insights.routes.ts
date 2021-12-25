import { Router } from 'express';
import * as path from '../controllers/insights.controller';

const router = Router();

router.route('/page=*:page')
  .get(path.getAllInsights)
  .post(path.createInsights);

export default router;
