import { FastifyReply, FastifyRequest } from 'fastify';
import DeleteCommunityService from '../../../../../domain/modules/Community/services/delete/DeleteCommunityService';

export default class DeleteCommunityController {
  private service: DeleteCommunityService;

  constructor(service: DeleteCommunityService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { id } = request.params as { id: string };
    const deletedCommunity = await this.service.execute(id);

    if (!deletedCommunity) {
      return reply.code(202).send(deletedCommunity);
    }

    return reply.badRequest('Invalid _id!');
  }
}

