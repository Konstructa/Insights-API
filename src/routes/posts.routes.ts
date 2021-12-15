import { Router } from 'express';
import * as posts from '../controllers/posts.controller';

const router = Router();

router.get('/', posts.getAllInsights);

router.post('/', posts.postInsights);

router.get('/:id_ideia', posts.getInsightId);

export default router;
