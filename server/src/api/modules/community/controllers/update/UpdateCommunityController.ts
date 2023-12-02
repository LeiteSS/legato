import { FastifyReply, FastifyRequest } from 'fastify';
import UpdateCommunityService from '../../../../../domain/modules/community/services/update/UpdateCommunityService';
import Community from '../../../../../domain/modules/community/Community';

export default class UpdateCommunityController {
  private service: UpdateCommunityService;

  constructor(service: UpdateCommunityService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { id } = request.params as { id: string };
    const community = request.body as Community;
    const updatedCommunity = await this.service.execute(id, community);

    if (updatedCommunity) {
      return reply.code(200).send(updatedCommunity);
    }

    return reply.badRequest('_id is invalid!');
  }
}

