import { FastifyInstance, FastifyPluginOptions } from 'fastify';

import createMessageSchema from './schemas/create/createMessageSchema';
import deleteMessageSchema from './schemas/delete/deleteMessageSchema';
import getByIdMessageSchema from './schemas/get_by_id/getByIdMessageSchema';
import updateMessageSchema from './schemas/update/updateMessageSchema';
import createMessageController from '../controllers/create';
import deleteMessageController from '../controllers/delete';
import getByIdMessageController from '../controllers/get_by_id';
import listMessageController from '../controllers/list';
import updateMessageController from '../controllers/update';

const messageRoutes = (server: FastifyInstance, opts: FastifyPluginOptions, done: () => void) => {
    server.post('/', createMessageSchema, async (request, reply) => {
        await createMessageController.handle(request, reply);
    });

    server.delete('/:id', deleteMessageSchema, async (request, reply) => {
        await deleteMessageController.handle(request, reply);
    });

    server.get('/:id', getByIdMessageSchema, async (request, reply) => {
        await getByIdMessageController.handle(request, reply);
    });


    server.get('/', async (request, reply) => {
        await listMessageController.handle(request, reply);
    });

    server.put('/:id', updateMessageSchema, async (request, reply) => {
        await updateMessageController.handle(request, reply);
    });

    done();
}

export default messageRoutes;