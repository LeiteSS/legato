import { FastifyInstance, FastifyPluginOptions } from 'fastify';

import createTranscriptionSchema from './schemas/create/createTranscriptionSchema';
import deleteTranscriptionSchema from './schemas/delete/deleteTranscriptionSchema';
import getTranscriptionSchema from './schemas/get/getTranscriptionSchema';
import getByIdTranscriptionSchema from './schemas/get_by_id/getByIdTranscriptionSchema';
import getByattributeTranscriptionSchema from './schemas/get_by_%attribute%/getByattributeTranscriptionSchema';
import listTranscriptionSchema from './schemas/list/listTranscriptionSchema';
import searchTranscriptionSchema from './schemas/search/searchTranscriptionSchema';
import updateTranscriptionSchema from './schemas/update/updateTranscriptionSchema';
import updatePartialTranscriptionSchema from './schemas/update_partial/updatePartialTranscriptionSchema';

export default (server: FastifyInstance, opts: FastifyPluginOptions, done: () => void) => {
    server.post('/', createTranscriptionSchema, async (request, reply) => {
        await createTranscriptionController.handle(request, reply);
    });

    server.delete('/:id', deleteTranscriptionSchema, async (request, reply) => {
        await deleteTranscriptionController.handle(request, reply);
    });

    server.get('/', getTranscriptionSchema, async (request, reply) => {
        await getTranscriptionController.handle(request, reply);
    });

    server.get('/:id', getByIdTranscriptionSchema, async (request, reply) => {
        await getByIdTranscriptionController.handle(request, reply);
    });

    server.get('/:%attribute%', getBy%attribute%TranscriptionSchema, async (request, reply) => {
        await getBy%attribute%TranscriptionController.handle(request, reply);
    });

    server.get('/', listTranscriptionSchema, async (request, reply) => {
        await listTranscriptionController.handle(request, reply);
    });

    server.post('/', searchTranscriptionSchema, async (request, reply) => {
        await searchTranscriptionController.handle(request, reply);
    });

    server.put('/:id', updateTranscriptionSchema, async (request, reply) => {
        await updateTranscriptionController.handle(request, reply);
    });

    server.patch('/:id', updatePartialTranscriptionSchema, async (request, reply) => {
        await updatePartialTranscriptionController.handle(request, reply);
    });

    done();
}