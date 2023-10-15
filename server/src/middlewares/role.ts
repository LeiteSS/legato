import { FastifyReply, FastifyRequest } from 'fastify';
import { jwtAuthenticate, JwtError } from '../config/jwt';

function ensureRole(
  request: FastifyRequest,
  reply: FastifyReply,
  accountType: string,
  done: () => void,
): void {
  try {
    const userToken = request.headers.authorization;
    const { user } = jwtAuthenticate(userToken!);
    if (user.accountType !== accountType) {
      reply.forbidden('you haven\'t access');
    }
  } catch (error) {
    const err = error as JwtError;
    const message = err.expiredAt ? `${err.message}: ${err.expiredAt}` : err.message;
    reply.unauthorized(message, '');
  }

  return done();
}

export default ensureRole;

