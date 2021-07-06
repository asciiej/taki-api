import { Router } from 'express';
import AuthUserService from '../../services/AuthUserService';

const loginRouter = Router();

loginRouter.post('/login', async (request, response) => {
  try {
    const { email, password } = request.body;

    const authUser = new AuthUserService();
    const { user, token } = await authUser.execute({ email, password });

    return response.json({
      user,
      token,
    });
  } catch (e) {
    return response.status(400).json({ error: e.message });
  }
});

export default loginRouter;
