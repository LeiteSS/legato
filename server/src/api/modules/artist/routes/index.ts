import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import createArtistSchema from './schemas/create/createArtistSchema';
import createArtistController from '../controllers/create';
import deleteArtistSchema from './schemas/delete/deleteArtistSchema';
import deleteArtistController from '../controllers/delete';
import getByIdArtistSchema from './schemas/get_by_id/getByIdArtistSchema';
import getByIdArtistController from '../controllers/get_by_id';
import listArtistController from '../controllers/list';
import updateArtistSchema from './schemas/update/updateArtistSchema';
import updateArtistController from '../controllers/update';


const artistRoute =  (server: FastifyInstance, opts: FastifyPluginOptions, done: () => void) => {
    server.post('/', createArtistSchema, async (request, reply) => {
        await createArtistController.handle(request, reply);
    });

    server.delete('/:id', deleteArtistSchema, async (request, reply) => {
        await deleteArtistController.handle(request, reply);
    });

    server.get('/:id', getByIdArtistSchema, async (request, reply) => {
        await getByIdArtistController.handle(request, reply);
    });

    server.get('/', async (request, reply) => {
        await listArtistController.handle(request, reply);
    });

    server.put('/:id', updateArtistSchema, async (request, reply) => {
        await updateArtistController.handle(request, reply);
    });

    done();
}

export default artistRoute;