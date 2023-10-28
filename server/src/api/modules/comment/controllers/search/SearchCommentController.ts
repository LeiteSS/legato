import { FastifyReply, FastifyRequest } from 'fastify';
import { PipelineStage } from 'mongoose';
import SearchCommentService from '../../../../../domain/modules/Comment/services/search/SearchCommentService';

export default class SearchCommentController {
  private service: SearchCommentService;

  constructor(service: SearchCommentService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { page, pageSize } = request.query as { page: number, pageSize: number };

    const pipeline = request.body as PipelineStage[];

    const foundedComments = await this.service.execute(pipeline, page, pageSize);

    if (foundedComments) {
      return reply.code(200).send(foundedComments);
    }

    return reply.badRequest('Invalid _id');
  }
}

