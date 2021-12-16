import { Router } from 'express';
import * as path from '../controllers/insights.controller';

const router = Router();

router.route('/')
  .get(path.getAllInsights)
  .post(path.postInsights);

router.route('/:id_ideia')
  .get(path.getInsightId)
  .delete(path.deleteInsightId);

export default router;
