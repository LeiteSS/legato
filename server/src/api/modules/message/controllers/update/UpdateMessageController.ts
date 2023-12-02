import { FastifyReply, FastifyRequest } from 'fastify';
import UpdateMessageService from '../../../../../domain/modules/message/services/update/UpdateMessageService';
import Message from '../../../../../domain/modules/message/Message';

export default class UpdateMessageController {
  private service: UpdateMessageService;

  constructor(service: UpdateMessageService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { id } = request.params as { id: string };
    const message= request.body as Message;
    const updatedMessage = await this.service.execute(id, message);

    if (updatedMessage) {
      return reply.code(200).send(updatedMessage);
    }

    return reply.badRequest('_id is invalid!');
  }
}

