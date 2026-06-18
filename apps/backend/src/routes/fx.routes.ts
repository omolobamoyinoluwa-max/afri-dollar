import { Router } from 'express';

import { FXController } from '../controllers/fx.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const fxRouter = Router();

fxRouter.get('/rates', (req, res, next) => {
  FXController.getRates(req, res).catch(next);
});

fxRouter.post('/quote', (req, res, next) => {
  FXController.createQuote(req, res).catch(next);
});

fxRouter.post('/convert', authMiddleware, (req, res, next) => {
  FXController.convert(req, res).catch(next);
});

fxRouter.get('/history', authMiddleware, (req, res, next) => {
  FXController.history(req, res).catch(next);
});

export default fxRouter;
