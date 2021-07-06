import { Router } from 'express';
import AuthUserService from '../../services/AuthUserService';
import RegisterUserService from '../../services/RegisterUserService';

const registerRouter = Router();

registerRouter.post('/register', async (request, response) => {
  try {
    const {
      email, password, name, phone,
    } = request.body;

    const createUser = new RegisterUserService();

    const user = await createUser.execute({
      email, password, name, phone,
    });

    return response.json(user);
  } catch (e) {
    return response.status(400).json({ error: e.message });
  }
});

export default registerRouter;
