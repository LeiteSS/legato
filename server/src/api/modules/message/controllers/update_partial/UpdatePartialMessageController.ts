import { FastifyReply, FastifyRequest } from 'fastify';
import UpdatePartialMessageService from '../../../../../domain/modules/Message/services/update_partial/UpdatePartialMessageService';
import Message from '../../../../../domain/modules/Message/Message';

export default class UpdatePartialMessageController {
  private service: UpdatePartialMessageService;

  constructor(service: UpdatePartialMessageService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { id, %attribute% } = request.params as { id: string, %attribute%: %type% };

    const updatedMessage = await this.service.execute(id, %attribute%);

    if (updatedMessage ) {
      return reply.code(200).send(updatedMessage);
    }

    return reply.badRequest('_id is invalid!');
  }
}

