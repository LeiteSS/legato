import { FastifyReply, FastifyRequest } from 'fastify';
import CreateMessageService from '../../../../../domain/modules/Message/services/create/CreateMessageService';
import Message from '../../../../../domain/modules/Message/Message';

export default class CreateMessageController {
  private service: CreateMessageService;

  constructor(service: CreateMessageService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const Message = request.body as Message;
    const createdMessage = await this.service.execute(Message);

    if (createdMessage) {
      return reply.code(202).send(createdMessage);
    }

    return reply.badRequest('Invalid _id!');
  }
}

