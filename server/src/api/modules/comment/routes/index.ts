import { FastifyInstance, FastifyPluginOptions } from 'fastify';

import createCommentSchema from './schemas/create/createCommentSchema';
import deleteCommentSchema from './schemas/delete/deleteCommentSchema';
import getByIdCommentSchema from './schemas/get_by_id/getByIdCommentSchema';
import updateCommentSchema from './schemas/update/updateCommentSchema';
import createCommentController from '../controllers/create';
import deleteCommentController from '../controllers/delete';
import getByIdCommentController from '../controllers/get_by_id';
import listCommentController from '../controllers/list';
import updateCommentController from '../controllers/update';

const commentRoutes = (server: FastifyInstance, opts: FastifyPluginOptions, done: () => void) => {
    server.post('/', createCommentSchema, async (request, reply) => {
        await createCommentController.handle(request, reply);
    });

    server.delete('/:id', deleteCommentSchema, async (request, reply) => {
        await deleteCommentController.handle(request, reply);
    });

    server.get('/:id', getByIdCommentSchema, async (request, reply) => {
        await getByIdCommentController.handle(request, reply);
    });

    server.get('/', async (request, reply) => {
        await listCommentController.handle(request, reply);
    });

    server.put('/:id', updateCommentSchema, async (request, reply) => {
        await updateCommentController.handle(request, reply);
    });

    done();
}

export default commentRoutes;