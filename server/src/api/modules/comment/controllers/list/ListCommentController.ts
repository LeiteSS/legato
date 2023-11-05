import { FastifyReply, FastifyRequest } from 'fastify';
import ListCommentService from '../../../../../domain/modules/comment/services/list/ListCommentService';

export default class ListCommentController {
  private service: ListCommentService;

  constructor(service: ListCommentService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { page, pageSize } = request.query as { page: number, pageSize: number };
    const foundedComments = await this.service.execute(
      [{ $match: {} }],
      page,
      pageSize,
    );

    return reply.code(200).send(foundedComments);
  }
}

