import { FastifyReply, FastifyRequest } from 'fastify';
import UpdatePartialCommunityService from '../../../../../domain/modules/Community/services/update_partial/UpdatePartialCommunityService';
import Community from '../../../../../domain/modules/Community/Community';

export default class UpdatePartialCommunityController {
  private service: UpdatePartialCommunityService;

  constructor(service: UpdatePartialCommunityService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { id, %attribute% } = request.params as { id: string, %attribute%: %type% };

    const updatedCommunity = await this.service.execute(id, %attribute%);

    if (updatedCommunity ) {
      return reply.code(200).send(updatedCommunity);
    }

    return reply.badRequest('_id is invalid!');
  }
}

