import { FastifyInstance, FastifyPluginOptions } from 'fastify';

import createInstrumentSchema from './schemas/create/createInstrumentSchema';
import deleteInstrumentSchema from './schemas/delete/deleteInstrumentSchema';
import getByIdInstrumentSchema from './schemas/get_by_id/getByIdInstrumentSchema';
import updateInstrumentSchema from './schemas/update/updateInstrumentSchema';
import createInstrumentController from '../controllers/create';
import deleteInstrumentController from '../controllers/delete';
import getByIdInstrumentController from '../controllers/get_by_id';
import listInstrumentController from '../controllers/list';
import updateInstrumentController from '../controllers/update';

const instrumentRoutes = (server: FastifyInstance, opts: FastifyPluginOptions, done: () => void) => {
    server.post('/', createInstrumentSchema, async (request, reply) => {
        await createInstrumentController.handle(request, reply);
    });

    server.delete('/:id', deleteInstrumentSchema, async (request, reply) => {
        await deleteInstrumentController.handle(request, reply);
    });

    server.get('/:id', getByIdInstrumentSchema, async (request, reply) => {
        await getByIdInstrumentController.handle(request, reply);
    });

    server.get('/', async (request, reply) => {
        await listInstrumentController.handle(request, reply);
    });


    server.put('/:id', updateInstrumentSchema, async (request, reply) => {
        await updateInstrumentController.handle(request, reply);
    });

    done();
}

export default instrumentRoutes;