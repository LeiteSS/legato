import { FastifyReply, FastifyRequest } from 'fastify';
import CreateMessageService from '../../../../../domain/modules/message/services/create/CreateMessageService';
import Message from '../../../../../domain/modules/message/Message';

export default class CreateMessageController {
  private service: CreateMessageService;

  constructor(service: CreateMessageService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const message = request.body as Message;
    const createdMessage = await this.service.execute(message);

    if (createdMessage) {
      return reply.code(202).send(createdMessage);
    }

    return reply.badRequest('Invalid _id!');
  }
}

