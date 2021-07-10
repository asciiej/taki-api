import { getRepository } from 'typeorm';
import User from '../models/User';

interface Request {
  userID: string,
}

interface Response {
  user: User,
}

class GetUserByIDService {
  public async execute({ userID }: Request): Promise<Response> {
    const userRepository = getRepository(User);

    const user = await userRepository.findOne({ where: { id: userID } });

    if (!user) {
      throw new Error('userID does not exist');
    }

    return { user };
  }
}

export default GetUserByIDService;
