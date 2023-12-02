import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { publicUserRoutes } from '../modules/user/routes';

const publicRoutes = (server: FastifyInstance, opts: FastifyPluginOptions, done: () => void) => {
  //server.addHook('onSend', ensureLog);

  server.register(publicUserRoutes, { prefix: '/users' });

  done();
};

export default publicRoutes;

