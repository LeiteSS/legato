import { FastifyReply, FastifyRequest } from 'fastify';
import ListMessageService from '../../../../../domain/modules/message/services/list/ListMessageService';

export default class ListMessageController {
  private service: ListMessageService;

  constructor(service: ListMessageService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { page, pageSize } = request.query as { page: number, pageSize: number };
    const foundedMessages = await this.service.execute(
      [{ $match: {} }],
      page,
      pageSize,
    );

    if (foundedMessages) {
      return reply.code(200).send(foundedMessages);
    }

    return reply.badRequest('Invalid _id');
  }
}

