import { Router } from 'express';

import authRouter from './auth/auth.routes';
import registerRouter from './auth/register.routes';
import createShowRouter from './show/createShow.routes';

const routes = Router();

routes.use('/show', createShowRouter);

routes.use('/auth', authRouter);
routes.use('/auth', registerRouter);

export default routes;
