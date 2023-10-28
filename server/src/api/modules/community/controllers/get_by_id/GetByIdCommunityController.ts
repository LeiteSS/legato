import { FastifyReply, FastifyRequest } from 'fastify';
import GetByIdCommunityService from '../../../../../domain/modules/Community/services/get_by_id/GetByIdCommunityService';

export default class GetByIdCommunityController {
  private service: GetByIdCommunityService;

  constructor(service: GetByIdCommunityService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { id } = request.params as { id: string };

    const Community = await this.service.execute(id);

    if (Community) {
      return reply.code(200).send(Community);
    }

    return reply.badRequest('Invalid _id!');
  }
}

