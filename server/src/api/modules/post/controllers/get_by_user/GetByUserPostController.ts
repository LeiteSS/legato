import { FastifyReply, FastifyRequest } from 'fastify';
import GetByUserPostService from '../../../../../domain/modules/Post/services/get_by_%User%/GetByUserPostService';

export default class GetByUserPostController {
  private service: GetByUserPostService;

  constructor(service: GetByUserPostService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { User } = request.params as { User: string };

    const Post = await this.service.execute(User);

    if (Post) {
      return reply.code(200).send(Post);
    }

    return reply.badRequest('Invalid _id!');
  }
}

