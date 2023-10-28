import { FastifyReply, FastifyRequest } from 'fastify';
import { PipelineStage } from 'mongoose';
import GetMessageService from '../../../../../domain/modules/Message/services/get/GetMessageService';

export default class GetMessageController {
  private service: GetMessageService;

  constructor(service: GetMessageService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const pipeline = request.body as PipelineStage[];
    const foundedMessages = await this.service.execute(pipeline);

    if (foundedMessages) {
      return reply.code(200).send(foundedMessages);
    }

    return reply.badRequest('Invalid _id!');
  }
}

