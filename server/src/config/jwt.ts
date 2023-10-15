import { JwtPayload, sign, verify } from 'jsonwebtoken';
import moment from 'moment';
import User from '../domain/modules/user/User';
import { jwt } from './environment';

interface Jwt {
  token: string;
}

interface JwtError extends Error {
  expiredAt: Date;
  message: string;
  name: string;
  stack: string;
}

interface Payload extends JwtPayload {
  user: User
}

const jwtAuthenticate = (token: string): Payload => {
  try {
    const payload = verify(token, jwt.encryption!) as Payload;
    return payload;
  } catch (err) {
    const error = err as JwtError;
    throw error;
  }
};

const getToken = (payload: object): string => {
  const token = sign(payload, jwt.encryption!, { expiresIn: moment().unix() + jwt.expireIn });
  return token;
};

export {
  Jwt, getToken, jwtAuthenticate, JwtError,
};
