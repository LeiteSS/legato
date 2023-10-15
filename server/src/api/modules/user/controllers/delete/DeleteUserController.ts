import { FastifyReply, FastifyRequest } from 'fastify';
import DeleteUserService from '../../../../../domain/modules/user/services/delete/DeleteUserService';

export default class DeleteUserController {
  private service: DeleteUserService;

  constructor(service: DeleteUserService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { id } = request.params as { id: string };
    const deletedUser = await this.service.execute(id);

    if (!deletedUser) {
      return reply.code(202).send(deletedUser);
    }

    return reply.badRequest('Invalid _id!');
  }
}

