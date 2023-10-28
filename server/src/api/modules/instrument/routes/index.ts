import { FastifyInstance, FastifyPluginOptions } from 'fastify';

import createInstrumentSchema from './schemas/create/createInstrumentSchema';
import deleteInstrumentSchema from './schemas/delete/deleteInstrumentSchema';
import getInstrumentSchema from './schemas/get/getInstrumentSchema';
import getByIdInstrumentSchema from './schemas/get_by_id/getByIdInstrumentSchema';
import getByattributeInstrumentSchema from './schemas/get_by_%attribute%/getByattributeInstrumentSchema';
import listInstrumentSchema from './schemas/list/listInstrumentSchema';
import searchInstrumentSchema from './schemas/search/searchInstrumentSchema';
import updateInstrumentSchema from './schemas/update/updateInstrumentSchema';
import updatePartialInstrumentSchema from './schemas/update_partial/updatePartialInstrumentSchema';

export default (server: FastifyInstance, opts: FastifyPluginOptions, done: () => void) => {
    server.post('/', createInstrumentSchema, async (request, reply) => {
        await createInstrumentController.handle(request, reply);
    });

    server.delete('/:id', deleteInstrumentSchema, async (request, reply) => {
        await deleteInstrumentController.handle(request, reply);
    });

    server.get('/', getInstrumentSchema, async (request, reply) => {
        await getInstrumentController.handle(request, reply);
    });

    server.get('/:id', getByIdInstrumentSchema, async (request, reply) => {
        await getByIdInstrumentController.handle(request, reply);
    });

    server.get('/:%attribute%', getBy%attribute%InstrumentSchema, async (request, reply) => {
        await getBy%attribute%InstrumentController.handle(request, reply);
    });

    server.get('/', listInstrumentSchema, async (request, reply) => {
        await listInstrumentController.handle(request, reply);
    });

    server.post('/', searchInstrumentSchema, async (request, reply) => {
        await searchInstrumentController.handle(request, reply);
    });

    server.put('/:id', updateInstrumentSchema, async (request, reply) => {
        await updateInstrumentController.handle(request, reply);
    });

    server.patch('/:id', updatePartialInstrumentSchema, async (request, reply) => {
        await updatePartialInstrumentController.handle(request, reply);
    });

    done();
}