import { FastifyInstance, FastifyPluginOptions } from 'fastify';

import createPostSchema from './schemas/create/createPostSchema';
import deletePostSchema from './schemas/delete/deletePostSchema';
import getPostSchema from './schemas/get/getPostSchema';
import getByIdPostSchema from './schemas/get_by_id/getByIdPostSchema';
import getByattributePostSchema from './schemas/get_by_%attribute%/getByattributePostSchema';
import listPostSchema from './schemas/list/listPostSchema';
import searchPostSchema from './schemas/search/searchPostSchema';
import updatePostSchema from './schemas/update/updatePostSchema';
import updatePartialPostSchema from './schemas/update_partial/updatePartialPostSchema';

export default (server: FastifyInstance, opts: FastifyPluginOptions, done: () => void) => {
    server.post('/', createPostSchema, async (request, reply) => {
        await createPostController.handle(request, reply);
    });

    server.delete('/:id', deletePostSchema, async (request, reply) => {
        await deletePostController.handle(request, reply);
    });

    server.get('/', getPostSchema, async (request, reply) => {
        await getPostController.handle(request, reply);
    });

    server.get('/:id', getByIdPostSchema, async (request, reply) => {
        await getByIdPostController.handle(request, reply);
    });

    server.get('/:%attribute%', getBy%attribute%PostSchema, async (request, reply) => {
        await getBy%attribute%PostController.handle(request, reply);
    });

    server.get('/', listPostSchema, async (request, reply) => {
        await listPostController.handle(request, reply);
    });

    server.post('/', searchPostSchema, async (request, reply) => {
        await searchPostController.handle(request, reply);
    });

    server.put('/:id', updatePostSchema, async (request, reply) => {
        await updatePostController.handle(request, reply);
    });

    server.patch('/:id', updatePartialPostSchema, async (request, reply) => {
        await updatePartialPostController.handle(request, reply);
    });

    done();
}