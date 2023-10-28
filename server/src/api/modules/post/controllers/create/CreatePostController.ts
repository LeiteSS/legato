import { FastifyReply, FastifyRequest } from 'fastify';
import CreatePostService from '../../../../../domain/modules/Post/services/create/CreatePostService';
import Post from '../../../../../domain/modules/Post/Post';

export default class CreatePostController {
  private service: CreatePostService;

  constructor(service: CreatePostService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const Post = request.body as Post;
    const createdPost = await this.service.execute(Post);

    if (createdPost) {
      return reply.code(202).send(createdPost);
    }

    return reply.badRequest('Invalid _id!');
  }
}

