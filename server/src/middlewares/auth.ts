import { FastifyReply, FastifyRequest } from 'fastify';
import { jwtAuthenticate, JwtError } from '../config/jwt';
import getUserService from '../domain/modules/user/services/get';

async function ensureAuthenticated(
  request: FastifyRequest,
  reply: FastifyReply,
): Promise<void> {
  const authToken = request.headers.authorization;

  if (!authToken) {
    reply.unauthorized(null, '');
  }

  try {
    const { user } = jwtAuthenticate(authToken!);

    const authenticatedUser = await getUserService.execute([
      { $project: { email: 1 } },
      { $match: { email: user.email } },
    ]);

    if (!authenticatedUser) {
      reply.unauthorized(null, '');
    }
  } catch (error) {
    const err = error as JwtError;
    const message = err.expiredAt ? `${err.message}: ${err.expiredAt}` : err.message;
    reply.unauthorized(message, '');
  }
}

export default ensureAuthenticated;

