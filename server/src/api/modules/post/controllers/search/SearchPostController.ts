import { FastifyReply, FastifyRequest } from 'fastify';
import { PipelineStage } from 'mongoose';
import SearchPostService from '../../../../../domain/modules/Post/services/search/SearchPostService';

export default class SearchPostController {
  private service: SearchPostService;

  constructor(service: SearchPostService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { page, pageSize } = request.query as { page: number, pageSize: number };

    const pipeline = request.body as PipelineStage[];

    const foundedPosts = await this.service.execute(pipeline, page, pageSize);

    if (foundedPosts) {
      return reply.code(200).send(foundedPosts);
    }

    return reply.badRequest('Invalid _id');
  }
}

