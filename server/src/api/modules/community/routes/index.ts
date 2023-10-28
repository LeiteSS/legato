import { FastifyInstance, FastifyPluginOptions } from 'fastify';

import createCommunitySchema from './schemas/create/createCommunitySchema';
import deleteCommunitySchema from './schemas/delete/deleteCommunitySchema';
import getCommunitySchema from './schemas/get/getCommunitySchema';
import getByIdCommunitySchema from './schemas/get_by_id/getByIdCommunitySchema';
import getByattributeCommunitySchema from './schemas/get_by_%attribute%/getByattributeCommunitySchema';
import listCommunitySchema from './schemas/list/listCommunitySchema';
import searchCommunitySchema from './schemas/search/searchCommunitySchema';
import updateCommunitySchema from './schemas/update/updateCommunitySchema';
import updatePartialCommunitySchema from './schemas/update_partial/updatePartialCommunitySchema';

export default (server: FastifyInstance, opts: FastifyPluginOptions, done: () => void) => {
    server.post('/', createCommunitySchema, async (request, reply) => {
        await createCommunityController.handle(request, reply);
    });

    server.delete('/:id', deleteCommunitySchema, async (request, reply) => {
        await deleteCommunityController.handle(request, reply);
    });

    server.get('/', getCommunitySchema, async (request, reply) => {
        await getCommunityController.handle(request, reply);
    });

    server.get('/:id', getByIdCommunitySchema, async (request, reply) => {
        await getByIdCommunityController.handle(request, reply);
    });

    server.get('/:%attribute%', getBy%attribute%CommunitySchema, async (request, reply) => {
        await getBy%attribute%CommunityController.handle(request, reply);
    });

    server.get('/', listCommunitySchema, async (request, reply) => {
        await listCommunityController.handle(request, reply);
    });

    server.post('/', searchCommunitySchema, async (request, reply) => {
        await searchCommunityController.handle(request, reply);
    });

    server.put('/:id', updateCommunitySchema, async (request, reply) => {
        await updateCommunityController.handle(request, reply);
    });

    server.patch('/:id', updatePartialCommunitySchema, async (request, reply) => {
        await updatePartialCommunityController.handle(request, reply);
    });

    done();
}