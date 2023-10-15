import { FastifyReply, FastifyRequest } from 'fastify';
import UpdateUserService from '../../../../../domain/modules/user/services/update/UpdateUserService';
import User from '../../../../../domain/modules/user/User';

export default class UpdateUserController {
  private service: UpdateUserService;

  constructor(service: UpdateUserService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { id } = request.params as { id: string };
    const user  = request.body as User;
    console.log(user);
    const updatedUser = await this.service.execute(id, user);

    if (updatedUser) {
      return reply.code(200).send(updatedUser);
    }

    return reply.badRequest('_id is invalid!');
  }
}

