import { FastifyInstance, FastifyPluginOptions } from 'fastify';

import createCommentSchema from './schemas/create/createCommentSchema';
import deleteCommentSchema from './schemas/delete/deleteCommentSchema';
import getCommentSchema from './schemas/get/getCommentSchema';
import getByIdCommentSchema from './schemas/get_by_id/getByIdCommentSchema';
import getByattributeCommentSchema from './schemas/get_by_%attribute%/getByattributeCommentSchema';
import listCommentSchema from './schemas/list/listCommentSchema';
import searchCommentSchema from './schemas/search/searchCommentSchema';
import updateCommentSchema from './schemas/update/updateCommentSchema';
import updatePartialCommentSchema from './schemas/update_partial/updatePartialCommentSchema';

export default (server: FastifyInstance, opts: FastifyPluginOptions, done: () => void) => {
    server.post('/', createCommentSchema, async (request, reply) => {
        await createCommentController.handle(request, reply);
    });

    server.delete('/:id', deleteCommentSchema, async (request, reply) => {
        await deleteCommentController.handle(request, reply);
    });

    server.get('/', getCommentSchema, async (request, reply) => {
        await getCommentController.handle(request, reply);
    });

    server.get('/:id', getByIdCommentSchema, async (request, reply) => {
        await getByIdCommentController.handle(request, reply);
    });

    server.get('/:%attribute%', getBy%attribute%CommentSchema, async (request, reply) => {
        await getBy%attribute%CommentController.handle(request, reply);
    });

    server.get('/', listCommentSchema, async (request, reply) => {
        await listCommentController.handle(request, reply);
    });

    server.post('/', searchCommentSchema, async (request, reply) => {
        await searchCommentController.handle(request, reply);
    });

    server.put('/:id', updateCommentSchema, async (request, reply) => {
        await updateCommentController.handle(request, reply);
    });

    server.patch('/:id', updatePartialCommentSchema, async (request, reply) => {
        await updatePartialCommentController.handle(request, reply);
    });

    done();
}