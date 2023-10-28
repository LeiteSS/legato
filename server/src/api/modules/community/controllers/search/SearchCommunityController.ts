import { FastifyReply, FastifyRequest } from 'fastify';
import { PipelineStage } from 'mongoose';
import SearchCommunityService from '../../../../../domain/modules/Community/services/search/SearchCommunityService';

export default class SearchCommunityController {
  private service: SearchCommunityService;

  constructor(service: SearchCommunityService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { page, pageSize } = request.query as { page: number, pageSize: number };

    const pipeline = request.body as PipelineStage[];

    const foundedCommunitys = await this.service.execute(pipeline, page, pageSize);

    if (foundedCommunitys) {
      return reply.code(200).send(foundedCommunitys);
    }

    return reply.badRequest('Invalid _id');
  }
}

