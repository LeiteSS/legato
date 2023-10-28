import { FastifyInstance, FastifyPluginOptions } from 'fastify';

import createMessageSchema from './schemas/create/createMessageSchema';
import deleteMessageSchema from './schemas/delete/deleteMessageSchema';
import getMessageSchema from './schemas/get/getMessageSchema';
import getByIdMessageSchema from './schemas/get_by_id/getByIdMessageSchema';
import getByattributeMessageSchema from './schemas/get_by_%attribute%/getByattributeMessageSchema';
import listMessageSchema from './schemas/list/listMessageSchema';
import searchMessageSchema from './schemas/search/searchMessageSchema';
import updateMessageSchema from './schemas/update/updateMessageSchema';
import updatePartialMessageSchema from './schemas/update_partial/updatePartialMessageSchema';

export default (server: FastifyInstance, opts: FastifyPluginOptions, done: () => void) => {
    server.post('/', createMessageSchema, async (request, reply) => {
        await createMessageController.handle(request, reply);
    });

    server.delete('/:id', deleteMessageSchema, async (request, reply) => {
        await deleteMessageController.handle(request, reply);
    });

    server.get('/', getMessageSchema, async (request, reply) => {
        await getMessageController.handle(request, reply);
    });

    server.get('/:id', getByIdMessageSchema, async (request, reply) => {
        await getByIdMessageController.handle(request, reply);
    });

    server.get('/:%attribute%', getBy%attribute%MessageSchema, async (request, reply) => {
        await getBy%attribute%MessageController.handle(request, reply);
    });

    server.get('/', listMessageSchema, async (request, reply) => {
        await listMessageController.handle(request, reply);
    });

    server.post('/', searchMessageSchema, async (request, reply) => {
        await searchMessageController.handle(request, reply);
    });

    server.put('/:id', updateMessageSchema, async (request, reply) => {
        await updateMessageController.handle(request, reply);
    });

    server.patch('/:id', updatePartialMessageSchema, async (request, reply) => {
        await updatePartialMessageController.handle(request, reply);
    });

    done();
}