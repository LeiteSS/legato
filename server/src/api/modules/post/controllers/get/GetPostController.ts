import { FastifyReply, FastifyRequest } from 'fastify';
import { PipelineStage } from 'mongoose';
import GetPostService from '../../../../../domain/modules/Post/services/get/GetPostService';

export default class GetPostController {
  private service: GetPostService;

  constructor(service: GetPostService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const pipeline = request.body as PipelineStage[];
    const foundedPosts = await this.service.execute(pipeline);

    if (foundedPosts) {
      return reply.code(200).send(foundedPosts);
    }

    return reply.badRequest('Invalid _id!');
  }
}

