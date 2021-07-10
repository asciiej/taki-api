import { getRepository } from 'typeorm';
import User, { UserRoleType } from '../models/User';

interface Request {
  userID: string,
}

interface Response {
  user: User,
}

class CheckUserHasAdminRoleService {
  public async execute({ userID }: Request): Promise<Response> {
    const userRepository = getRepository(User);

    const user = await userRepository.findOne({ where: { id: userID } });

    if (!user) {
      throw new Error('userID does not exist');
    }

    if (user.role !== UserRoleType.ADMIN) {
      throw new Error('User does not have permission');
    }

    return { user };
  }
}

export default CheckUserHasAdminRoleService;
