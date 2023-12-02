import { FastifyInstance, FastifyPluginOptions } from 'fastify';

import createCommunitySchema from './schemas/create/createCommunitySchema';
import deleteCommunitySchema from './schemas/delete/deleteCommunitySchema';
import getByIdCommunitySchema from './schemas/get_by_id/getByIdCommunitySchema';
import updateCommunitySchema from './schemas/update/updateCommunitySchema';
import createCommunityController from '../controllers/create';
import deleteCommunityController from '../controllers/delete';
import getByIdCommunityController from '../controllers/get_by_id';
import listCommunityController from '../controllers/list';
import updateCommunityController from '../controllers/update';

const communityRoutes = (server: FastifyInstance, opts: FastifyPluginOptions, done: () => void) => {
    server.post('/', createCommunitySchema, async (request, reply) => {
        await createCommunityController.handle(request, reply);
    });

    server.delete('/:id', deleteCommunitySchema, async (request, reply) => {
        await deleteCommunityController.handle(request, reply);
    });

    server.get('/:id', getByIdCommunitySchema, async (request, reply) => {
        await getByIdCommunityController.handle(request, reply);
    });

    server.get('/', async (request, reply) => {
        await listCommunityController.handle(request, reply);
    });

    server.put('/:id', updateCommunitySchema, async (request, reply) => {
        await updateCommunityController.handle(request, reply);
    });

    done();
}

export default communityRoutes;