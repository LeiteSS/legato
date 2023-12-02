import { FastifyInstance, FastifyPluginOptions } from 'fastify';

import createPostSchema from './schemas/create/createPostSchema';
import deletePostSchema from './schemas/delete/deletePostSchema';
import getByIdPostSchema from './schemas/get_by_id/getByIdPostSchema';
import updatePostSchema from './schemas/update/updatePostSchema';
import createPostController from '../controllers/create';
import deletePostController from '../controllers/delete';
import getByIdPostController from '../controllers/get_by_id';
import listPostController from '../controllers/list';
import updatePostController from '../controllers/update';

const postRoutes = (server: FastifyInstance, opts: FastifyPluginOptions, done: () => void) => {
    server.post('/', createPostSchema, async (request, reply) => {
        await createPostController.handle(request, reply);
    });

    server.delete('/:id', deletePostSchema, async (request, reply) => {
        await deletePostController.handle(request, reply);
    });


    server.get('/:id', getByIdPostSchema, async (request, reply) => {
        await getByIdPostController.handle(request, reply);
    });

    server.get('/', async (request, reply) => {
        await listPostController.handle(request, reply);
    });

    server.put('/:id', updatePostSchema, async (request, reply) => {
        await updatePostController.handle(request, reply);
    });

    done();
}

export default postRoutes;