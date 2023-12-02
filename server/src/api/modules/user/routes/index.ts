import { FastifyInstance, FastifyPluginOptions } from 'fastify';

import createUserSchema from './schemas/create/createUserSchema';
import deleteUserSchema from './schemas/delete/deleteUserSchema';
import getByIdUserSchema from './schemas/get_by_id/getByIdUserSchema';
import updateUserSchema from './schemas/update/updateUserSchema';
import updatePartialUserSchema from './schemas/update_partial/updatePartialUserSchema';
import getByEmailUserSchema from './schemas/get_by_email/getByEmailUserSchema';
import createUserController from '../controllers/create';
import deleteUserController from '../controllers/delete';
import getByIdUserController from '../controllers/get_by_id';
import getByEmailUserController from '../controllers/get_by_email';
import listUserController from '../controllers/list';
import updateUserController from '../controllers/update';
import updatePartialUserController from '../controllers/update_partial';
import authenticateUserController from '../controllers/authenticate';

export const privateUserRoutes = (server: FastifyInstance, opts: FastifyPluginOptions, done: () => void) => {
    server.delete('/:id', deleteUserSchema, async (request, reply) => {
        await deleteUserController.handle(request, reply);
    });

    server.get('/all', async (request, reply) => {
        await listUserController.handle(request, reply);
    });

    server.get('/:id', getByIdUserSchema, async (request, reply) => {
        await getByIdUserController.handle(request, reply);
    });

    server.get('/email/:email', getByEmailUserSchema, async (request, reply) => {
        await getByEmailUserController.handle(request, reply);
    });

    server.put('/:id', updateUserSchema, async (request, reply) => {
        await updateUserController.handle(request, reply);
    });

    server.patch('/:id', updatePartialUserSchema, async (request, reply) => {
        await updatePartialUserController.handle(request, reply);
    });

    done();
}

export const publicUserRoutes = (server: FastifyInstance, opts: FastifyPluginOptions, done: () => void) => {
    server.post('/login', async (request, reply) => {
        await authenticateUserController.handle(request, reply);
    })
    
    server.post('/', createUserSchema, async (request, reply) => {
        await createUserController.handle(request, reply);
    });

    done();
}