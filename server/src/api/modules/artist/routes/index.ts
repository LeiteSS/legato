import { FastifyInstance, FastifyPluginOptions } from 'fastify';

import createArtistSchema from './schemas/create/createArtistSchema';
import deleteArtistSchema from './schemas/delete/deleteArtistSchema';
import getArtistSchema from './schemas/get/getArtistSchema';
import getByIdArtistSchema from './schemas/get_by_id/getByIdArtistSchema';
import getByattributeArtistSchema from './schemas/get_by_%attribute%/getByattributeArtistSchema';
import listArtistSchema from './schemas/list/listArtistSchema';
import searchArtistSchema from './schemas/search/searchArtistSchema';
import updateArtistSchema from './schemas/update/updateArtistSchema';
import updatePartialArtistSchema from './schemas/update_partial/updatePartialArtistSchema';

export default (server: FastifyInstance, opts: FastifyPluginOptions, done: () => void) => {
    server.post('/', createArtistSchema, async (request, reply) => {
        await createArtistController.handle(request, reply);
    });

    server.delete('/:id', deleteArtistSchema, async (request, reply) => {
        await deleteArtistController.handle(request, reply);
    });

    server.get('/', getArtistSchema, async (request, reply) => {
        await getArtistController.handle(request, reply);
    });

    server.get('/:id', getByIdArtistSchema, async (request, reply) => {
        await getByIdArtistController.handle(request, reply);
    });

    server.get('/:%attribute%', getBy%attribute%ArtistSchema, async (request, reply) => {
        await getBy%attribute%ArtistController.handle(request, reply);
    });

    server.get('/', listArtistSchema, async (request, reply) => {
        await listArtistController.handle(request, reply);
    });

    server.post('/', searchArtistSchema, async (request, reply) => {
        await searchArtistController.handle(request, reply);
    });

    server.put('/:id', updateArtistSchema, async (request, reply) => {
        await updateArtistController.handle(request, reply);
    });

    server.patch('/:id', updatePartialArtistSchema, async (request, reply) => {
        await updatePartialArtistController.handle(request, reply);
    });

    done();
}