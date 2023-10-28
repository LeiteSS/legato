import { FastifyReply, FastifyRequest } from 'fastify';
import DeleteMessageService from '../../../../../domain/modules/Message/services/delete/DeleteMessageService';

export default class DeleteMessageController {
  private service: DeleteMessageService;

  constructor(service: DeleteMessageService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { id } = request.params as { id: string };
    const deletedMessage = await this.service.execute(id);

    if (!deletedMessage) {
      return reply.code(202).send(deletedMessage);
    }

    return reply.badRequest('Invalid _id!');
  }
}

