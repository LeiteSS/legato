import { FastifyReply, FastifyRequest } from 'fastify';
import CreateCommunityService from '../../../../../domain/modules/community/services/create/CreateCommunityService';
import Community from '../../../../../domain/modules/community/Community';

export default class CreateCommunityController {
  private service: CreateCommunityService;

  constructor(service: CreateCommunityService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const community = request.body as Community;
    const createdCommunity = await this.service.execute(community);

    if (createdCommunity) {
      return reply.code(202).send(createdCommunity);
    }

    return reply.badRequest('Invalid _id!');
  }
}

