import { Router } from 'express';
import ensureAuthenticated from '../../middlewares/ensureAuthenticated';
import GetEventByIDService from '../../services/GetEventByIDService';
import GetEventsService from '../../services/GetEventsService';

const eventsRouter = Router();

eventsRouter.use(ensureAuthenticated);

eventsRouter.get('/:id', async (request, response) => {
  try {
    const eventID = request.params.id;

    if (eventID) {
      const eventService = new GetEventByIDService();
      const event = await eventService.execute({ eventID });
      return response.json(event);
    }
  } catch (e) {
    return response.status(400).json({ error: e.message });
  }
});

eventsRouter.get('/', async (request, response) => {
  try {
    const eventsService = new GetEventsService();
    const events = await eventsService.execute();
    return response.json(events);
  } catch (e) {
    return response.status(400).json({ error: e.message });
  }
});

export default eventsRouter;
