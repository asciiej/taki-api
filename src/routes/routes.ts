import { Router } from 'express';

import authRouter from './auth/auth.routes';
import registerRouter from './auth/register.routes';
import createEventRouter from './event/createEvent.routes';
import eventsRouter from './event/events.routes';

const routes = Router();

routes.use('/event', createEventRouter);
routes.use('/event', eventsRouter);

routes.use('/auth', authRouter);
routes.use('/auth', registerRouter);

export default routes;
