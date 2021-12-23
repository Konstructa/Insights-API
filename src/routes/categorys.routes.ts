import { Router } from 'express';
import * as path from '../controllers/categorys.controller';

const router = Router();

router.route('/classification')
  .get(path.getNamesCategorys);

router.route('/:category')
  .get(path.getElementsFromOneCategory);

export default router;
