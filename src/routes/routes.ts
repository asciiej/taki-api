import { Router } from 'express';

import authRouter from './auth/auth.routes';
import registerRouter from './auth/register.routes';

const routes = Router();

routes.use('/auth', authRouter);
routes.use('/auth', registerRouter);

export default routes;
