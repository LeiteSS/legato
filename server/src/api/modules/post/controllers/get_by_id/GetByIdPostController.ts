import { FastifyReply, FastifyRequest } from 'fastify';
import GetByIdPostService from '../../../../../domain/modules/post/services/get_by_id/GetByIdPostService';

export default class GetByIdPostController {
  private service: GetByIdPostService;

  constructor(service: GetByIdPostService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { id } = request.params as { id: string };

    const post = await this.service.execute(id);

    if (post) {
      return reply.code(200).send(post);
    }

    return reply.badRequest('Invalid _id!');
  }
}

