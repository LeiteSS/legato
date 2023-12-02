import { FastifyReply, FastifyRequest } from 'fastify';
import ListCommunityService from '../../../../../domain/modules/community/services/list/ListCommunityService';

export default class ListCommunityController {
  private service: ListCommunityService;

  constructor(service: ListCommunityService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { page, pageSize } = request.query as { page: number, pageSize: number };
    const foundedCommunities = await this.service.execute(
      [{ $match: {} }],
      page,
      pageSize,
    );

    if (foundedCommunities) {
      return reply.code(200).send(foundedCommunities);
    }

    return reply.badRequest('Invalid _id');
  }
}

