import { Router } from 'express';
import languageController from './language.controller';
import validateBody from '../../middlewares/validateBody';
import { languageSchema } from './language.schema';

const router = Router();

router.get('/change', validateBody(languageSchema), languageController.changeLanguage);

export default router;