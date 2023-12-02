import { FastifyReply, FastifyRequest } from 'fastify';
import CreatePostService from '../../../../../domain/modules/post/services/create/CreatePostService';
import Post from '../../../../../domain/modules/post/Post';

export default class CreatePostController {
  private service: CreatePostService;

  constructor(service: CreatePostService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const post = request.body as Post;
    const createdPost = await this.service.execute(post);

    return reply.code(202).send(createdPost);
  }
}

