import { FastifyReply, FastifyRequest } from 'fastify';
import CreateUserService from '../../../../../domain/modules/user/services/create/CreateUserService';
import User from '../../../../../domain/modules/user/User';

export default class CreateUserController {
  private service: CreateUserService;

  constructor(service: CreateUserService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const user = request.body as User;
    const createdUser = await this.service.execute(user);

    if (createdUser) {
      return reply.code(202).send(createdUser);
    }

    return reply.badRequest('Invalid _id!');
  }
}

