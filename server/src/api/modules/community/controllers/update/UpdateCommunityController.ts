import { FastifyReply, FastifyRequest } from 'fastify';
import UpdateCommunityService from '../../../../../domain/modules/Community/services/update/UpdateCommunityService';
import Community from '../../../../../domain/modules/Community/Community';

export default class UpdatePartialCommunityController {
  private service: UpdatePartialCommunityService;

  constructor(service: UpdatePartialCommunityService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { id } = request.params as { id: string };
    const { Community } = request.body as Community;
    const updatedCommunity = await this.service.execute(id, Community);

    if (updatedCommunity) {
      return reply.code(200).send(updatedCommunity);
    }

    return reply.badRequest('_id is invalid!');
  }
}

