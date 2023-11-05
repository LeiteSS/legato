import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import userRoutes from '../modules/user/routes';
import artistRoute from '../modules/artist/routes';

const publicRoutes = (server: FastifyInstance, opts: FastifyPluginOptions, done: () => void) => {
  //server.addHook('onSend', ensureLog);

  server.register(userRoutes, { prefix: '/users' });
  server.register(artistRoute, { prefix: '/artist'})

  done();
};

export default publicRoutes;

