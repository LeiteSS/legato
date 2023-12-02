import { FastifyInstance, FastifyPluginOptions } from 'fastify';

import createMusicSchema from './schemas/create/createMusicSchema';
import deleteMusicSchema from './schemas/delete/deleteMusicSchema';
import getByIdMusicSchema from './schemas/get_by_id/getByIdMusicSchema';
import updateMusicSchema from './schemas/update/updateMusicSchema';
import createMusicController from '../controllers/create';
import deleteMusicController from '../controllers/delete';
import getByIdMusicController from '../controllers/get_by_id';
import listMusicController from '../controllers/list';
import updateMusicController from '../controllers/update';

const musicRoutes = (server: FastifyInstance, opts: FastifyPluginOptions, done: () => void) => {
    server.post('/', createMusicSchema, async (request, reply) => {
        await createMusicController.handle(request, reply);
    });

    server.delete('/:id', deleteMusicSchema, async (request, reply) => {
        await deleteMusicController.handle(request, reply);
    });


    server.get('/:id', getByIdMusicSchema, async (request, reply) => {
        await getByIdMusicController.handle(request, reply);
    });


    server.get('/', async (request, reply) => {
        await listMusicController.handle(request, reply);
    });


    server.put('/:id', updateMusicSchema, async (request, reply) => {
        await updateMusicController.handle(request, reply);
    });

    done();
}

export default musicRoutes;