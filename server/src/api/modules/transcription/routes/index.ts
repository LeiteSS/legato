import { FastifyInstance, FastifyPluginOptions } from 'fastify';

import createTranscriptionSchema from './schemas/create/createTranscriptionSchema';
import deleteTranscriptionSchema from './schemas/delete/deleteTranscriptionSchema';
import getByIdTranscriptionSchema from './schemas/get_by_id/getByIdTranscriptionSchema';
import updateTranscriptionSchema from './schemas/update/updateTranscriptionSchema';
import createTranscriptionController from '../controllers/create';
import deleteTranscriptionController from '../controllers/delete';
import getByIdTranscriptionController from '../controllers/get_by_id';
import listTranscriptionController from '../controllers/list';
import updateTranscriptionController from '../controllers/update';

const transcriptionRoutes = (server: FastifyInstance, opts: FastifyPluginOptions, done: () => void) => {
    server.post('/', createTranscriptionSchema, async (request, reply) => {
        await createTranscriptionController.handle(request, reply);
    });

    server.delete('/:id', deleteTranscriptionSchema, async (request, reply) => {
        await deleteTranscriptionController.handle(request, reply);
    });

    server.get('/:id', getByIdTranscriptionSchema, async (request, reply) => {
        await getByIdTranscriptionController.handle(request, reply);
    });

    server.get('/', async (request, reply) => {
        await listTranscriptionController.handle(request, reply);
    });

    server.put('/:id', updateTranscriptionSchema, async (request, reply) => {
        await updateTranscriptionController.handle(request, reply);
    });

    done();
}

export default transcriptionRoutes;