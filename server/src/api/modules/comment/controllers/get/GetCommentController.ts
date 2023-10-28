import { FastifyReply, FastifyRequest } from 'fastify';
import { PipelineStage } from 'mongoose';
import GetCommentService from '../../../../../domain/modules/Comment/services/get/GetCommentService';

export default class GetCommentController {
  private service: GetCommentService;

  constructor(service: GetCommentService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const pipeline = request.body as PipelineStage[];
    const foundedComments = await this.service.execute(pipeline);

    if (foundedComments) {
      return reply.code(200).send(foundedComments);
    }

    return reply.badRequest('Invalid _id!');
  }
}

