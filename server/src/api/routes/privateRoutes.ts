import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import ensureAuthenticated from '../../middlewares/auth';
import { privateUserRoutes } from '../modules/user/routes';
import artistRoute from '../modules/artist/routes';
import commentRoutes from '../modules/comment/routes';
import communityRoutes from '../modules/community/routes';
import instrumentRoutes from '../modules/instrument/routes';
import messageRoutes from '../modules/message/routes';
import musicRoutes from '../modules/music/routes';
import postRoutes from '../modules/post/routes';
import transcriptionRoutes from '../modules/transcription/routes';

const privateRoutes = (server: FastifyInstance, opts: FastifyPluginOptions, done: () => void) => {
  server.addHook('onRequest', ensureAuthenticated);
  //server.addHook('onSend', ensureLog);

  server.register(privateUserRoutes, { prefix: '/user' });
  server.register(artistRoute, { prefix: '/artist'});
  server.register(commentRoutes, { prefix: '/comment' });
  server.register(communityRoutes,   { prefix: '/commmunity'});
  server.register(instrumentRoutes, { prefix: '/instrument'});
  server.register(messageRoutes, { prefix: '/message' });
  server.register(musicRoutes, { prefix: '/music' });
  server.register(postRoutes, { prefix: '/post' });
  server.register(transcriptionRoutes, { prefix: '/transcription' });
  
  done();
};

export default privateRoutes;

