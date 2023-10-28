import { FastifyInstance, FastifyPluginOptions } from 'fastify';

import createMusicSchema from './schemas/create/createMusicSchema';
import deleteMusicSchema from './schemas/delete/deleteMusicSchema';
import getMusicSchema from './schemas/get/getMusicSchema';
import getByIdMusicSchema from './schemas/get_by_id/getByIdMusicSchema';
import getByattributeMusicSchema from './schemas/get_by_%attribute%/getByattributeMusicSchema';
import listMusicSchema from './schemas/list/listMusicSchema';
import searchMusicSchema from './schemas/search/searchMusicSchema';
import updateMusicSchema from './schemas/update/updateMusicSchema';
import updatePartialMusicSchema from './schemas/update_partial/updatePartialMusicSchema';

export default (server: FastifyInstance, opts: FastifyPluginOptions, done: () => void) => {
    server.post('/', createMusicSchema, async (request, reply) => {
        await createMusicController.handle(request, reply);
    });

    server.delete('/:id', deleteMusicSchema, async (request, reply) => {
        await deleteMusicController.handle(request, reply);
    });

    server.get('/', getMusicSchema, async (request, reply) => {
        await getMusicController.handle(request, reply);
    });

    server.get('/:id', getByIdMusicSchema, async (request, reply) => {
        await getByIdMusicController.handle(request, reply);
    });

    server.get('/:%attribute%', getBy%attribute%MusicSchema, async (request, reply) => {
        await getBy%attribute%MusicController.handle(request, reply);
    });

    server.get('/', listMusicSchema, async (request, reply) => {
        await listMusicController.handle(request, reply);
    });

    server.post('/', searchMusicSchema, async (request, reply) => {
        await searchMusicController.handle(request, reply);
    });

    server.put('/:id', updateMusicSchema, async (request, reply) => {
        await updateMusicController.handle(request, reply);
    });

    server.patch('/:id', updatePartialMusicSchema, async (request, reply) => {
        await updatePartialMusicController.handle(request, reply);
    });

    done();
}