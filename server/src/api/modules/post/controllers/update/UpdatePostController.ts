import { FastifyReply, FastifyRequest } from 'fastify';
import UpdatePostService from '../../../../../domain/modules/Post/services/update/UpdatePostService';
import Post from '../../../../../domain/modules/Post/Post';

export default class UpdatePartialPostController {
  private service: UpdatePartialPostService;

  constructor(service: UpdatePartialPostService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { id } = request.params as { id: string };
    const { Post } = request.body as Post;
    const updatedPost = await this.service.execute(id, Post);

    if (updatedPost) {
      return reply.code(200).send(updatedPost);
    }

    return reply.badRequest('_id is invalid!');
  }
}

