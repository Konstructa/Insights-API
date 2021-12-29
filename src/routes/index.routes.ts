import { Router } from 'express';
import { indexWelcome } from '../controllers/index.controller';

const router = Router();

router.use('/', indexWelcome);

export default router;
