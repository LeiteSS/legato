import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import userRoutes from '../modules/user/routes';
//import ensureLog from '../../middlewares/log';

const publicRoutes = (server: FastifyInstance, opts: FastifyPluginOptions, done: () => void) => {
  //server.addHook('onSend', ensureLog);

  server.register(userRoutes, { prefix: '/users' });

  done();
};

export default publicRoutes;

