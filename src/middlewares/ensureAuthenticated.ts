import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error('JWT is missing');
  }

  const [, token] = authHeader.split(' ');
  try {
    const decoded = verify(token, process.env.PRIVATE_KEY);

    const { sub } = decoded as TokenPayload;
    request.user = {
      id: sub,
    };

    return next();
  } catch (e) {
    throw new Error('Invalid token');
  }
}
