import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import User from '../models/User';

interface Request {
  email: string,
  password: string
}

interface Response {
  user: User,
  token: string
}

class AuthUserService {
  public async execute({ email, password }: Request): Promise<Response> {
    const userRepository = getRepository(User);

    const user = await userRepository.findOne({ where: { email } });

    if (!user) {
      throw new Error('Credentials do not match');
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new Error('Credentials do not match');
    }

    const token = sign({}, process.env.PRIVATE_KEY, {
      subject: user.id,
      expiresIn: '1d',
    });

    return { user, token };
  }
}

export default AuthUserService;
