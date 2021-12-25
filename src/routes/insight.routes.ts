import { Router } from 'express';
import * as path from '../controllers/insight.controller';

const router = Router();

router.route('/:id_ideia')
  .get(path.getInsightById)
  .delete(path.deleteInsightId);

export default router;
