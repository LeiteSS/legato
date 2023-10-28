import { FastifyReply, FastifyRequest } from 'fastify';
import GetByNameCommunityService from '../../../../../domain/modules/Community/services/get_by_%Name%/GetByNameCommunityService';

export default class GetByNameCommunityController {
  private service: GetByNameCommunityService;

  constructor(service: GetByNameCommunityService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { Name } = request.params as { Name: string };

    const Community = await this.service.execute(Name);

    if (Community) {
      return reply.code(200).send(Community);
    }

    return reply.badRequest('Invalid _id!');
  }
}

