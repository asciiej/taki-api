import { Router } from 'express';
import ensureAuthenticated from '../../middlewares/ensureAuthenticated';
import CheckUserHasAdminRoleService from '../../services/CheckUserHasAdminRoleService';

const createShowRouter = Router();

createShowRouter.use(ensureAuthenticated);

createShowRouter.post('/create', async (request, response) => {
  try {
    const userID = request.user.id;
    const userIsAdminService = new CheckUserHasAdminRoleService();
    const { user } = await userIsAdminService.execute({ userID });

    // TODO tratar o request e retornar sucesso caso tudo certo na criação do espetaculo
  } catch (e) {
    return response.status(400).json({ error: e.message });
  }
});

export default createShowRouter;
