import { FastifyReply, FastifyRequest } from 'fastify';
import UpdateMessageService from '../../../../../domain/modules/Message/services/update/UpdateMessageService';
import Message from '../../../../../domain/modules/Message/Message';

export default class UpdatePartialMessageController {
  private service: UpdatePartialMessageService;

  constructor(service: UpdatePartialMessageService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { id } = request.params as { id: string };
    const { Message } = request.body as Message;
    const updatedMessage = await this.service.execute(id, Message);

    if (updatedMessage) {
      return reply.code(200).send(updatedMessage);
    }

    return reply.badRequest('_id is invalid!');
  }
}

