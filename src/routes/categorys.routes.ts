import { Router } from 'express';
import * as path from '../controllers/categorys.controller';

const router = Router();

router.route('/')
  .get(path.getNamesCategorys);

router.route('/:category')
  .get(path.getElementsFromOneCategory);

export default router;
