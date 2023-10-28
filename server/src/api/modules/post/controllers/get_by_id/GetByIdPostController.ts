import { FastifyReply, FastifyRequest } from 'fastify';
import GetByIdPostService from '../../../../../domain/modules/Post/services/get_by_id/GetByIdPostService';

export default class GetByIdPostController {
  private service: GetByIdPostService;

  constructor(service: GetByIdPostService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { id } = request.params as { id: string };

    const Post = await this.service.execute(id);

    if (Post) {
      return reply.code(200).send(Post);
    }

    return reply.badRequest('Invalid _id!');
  }
}

