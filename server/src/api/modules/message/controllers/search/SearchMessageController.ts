import { FastifyReply, FastifyRequest } from 'fastify';
import { PipelineStage } from 'mongoose';
import SearchMessageService from '../../../../../domain/modules/Message/services/search/SearchMessageService';

export default class SearchMessageController {
  private service: SearchMessageService;

  constructor(service: SearchMessageService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { page, pageSize } = request.query as { page: number, pageSize: number };

    const pipeline = request.body as PipelineStage[];

    const foundedMessages = await this.service.execute(pipeline, page, pageSize);

    if (foundedMessages) {
      return reply.code(200).send(foundedMessages);
    }

    return reply.badRequest('Invalid _id');
  }
}

