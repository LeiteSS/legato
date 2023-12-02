import { FastifyReply, FastifyRequest } from 'fastify';
import GetByIdMessageService from '../../../../../domain/modules/message/services/get_by_id/GetByIdMessageService';

export default class GetByIdMessageController {
  private service: GetByIdMessageService;

  constructor(service: GetByIdMessageService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { id } = request.params as { id: string };

    const message = await this.service.execute(id);

    if (message) {
      return reply.code(200).send(message);
    }

    return reply.badRequest('Invalid _id!');
  }
}

