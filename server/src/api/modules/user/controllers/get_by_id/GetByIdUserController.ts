import { FastifyReply, FastifyRequest } from 'fastify';
import GetByIdUserService from '../../../../../domain/modules/user/services/get_by_id/GetByIdUserService';

export default class GetByIdUserController {
  private service: GetByIdUserService;

  constructor(service: GetByIdUserService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { id } = request.params as { id: string };

    const user = await this.service.execute(id);

    if (user) {
      return reply.code(200).send(user);
    }

    return reply.badRequest('Invalid _id!');
  }
}

