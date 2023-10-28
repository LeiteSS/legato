import { FastifyReply, FastifyRequest } from 'fastify';
import ListPostService from '../../../../../domain/modules/Post/services/list/ListPostService';

export default class ListPostController {
  private service: ListPostService;

  constructor(service: ListPostService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { page, pageSize } = request.query as { page: number, pageSize: number };
    const foundedPosts = await this.service.execute(
      [{ $match: {} }],
      page,
      pageSize,
    );

    if (foundedPosts) {
      return reply.code(200).send(foundedPosts);
    }

    return reply.badRequest('Invalid _id');
  }
}

