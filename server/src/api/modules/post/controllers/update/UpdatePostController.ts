import { FastifyReply, FastifyRequest } from 'fastify';
import UpdatePostService from '../../../../../domain/modules/post/services/update/UpdatePostService';
import Post from '../../../../../domain/modules/post/Post';

export default class UpdatePostController {
  private service: UpdatePostService;

  constructor(service: UpdatePostService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { id } = request.params as { id: string };
    const post = request.body as Post;
    const updatedPost = await this.service.execute(id, post);

    if (updatedPost) {
      return reply.code(200).send(updatedPost);
    }

    return reply.badRequest('_id is invalid!');
  }
}

