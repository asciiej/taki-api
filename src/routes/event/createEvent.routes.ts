import { Router } from 'express';
import ensureAuthenticated from '../../middlewares/ensureAuthenticated';
import CheckUserHasAdminRoleService from '../../services/CheckUserHasAdminRoleService';
import CreateEventService from '../../services/CreateEventService';

const createEventRouter = Router();

createEventRouter.use(ensureAuthenticated);

createEventRouter.post('/create', async (request, response) => {
  try {
    const userID = request.user.id;
    const userIsAdminService = new CheckUserHasAdminRoleService();
    await userIsAdminService.execute({ userID });

    const {
      date, name, location, seat_count, seat_column_count, seat_row_count,
    } = request.body;

    const createShow = new CreateEventService();

    const show = await createShow.execute({
      date, name, location, seat_count, seat_column_count, seat_row_count,
    });

    return response.json(show);
  } catch (e) {
    return response.status(400).json({ error: e.message });
  }
});

export default createEventRouter;
