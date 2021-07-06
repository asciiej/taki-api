import { getRepository } from 'typeorm';
import { compare, hash } from 'bcryptjs';
import User from '../models/User';

interface Request {
  email: string,
  password: string
  name: string
  phone: string
}

class AuthUserService {
  public async execute({
    email, password, name, phone,
  }: Request): Promise<User> {
    const userRepository = getRepository(User);

    const userExists = await userRepository.findOne({ where: { email } });

    if (userExists) {
      throw new Error('Email already registered');
    }

    const hashedPassword = await hash(password, 8);

    const user = userRepository.create(
      {
        email,
        password: hashedPassword,
        name,
        phone,
      },
    );

    await userRepository.save(user);

    return user;
  }
}

export default AuthUserService;
