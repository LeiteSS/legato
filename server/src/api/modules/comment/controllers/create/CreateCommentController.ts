import { FastifyReply, FastifyRequest } from 'fastify';
import CreateCommentService from '../../../../../domain/modules/Comment/services/create/CreateCommentService';
import Comment from '../../../../../domain/modules/Comment/Comment';

export default class CreateCommentController {
  private service: CreateCommentService;

  constructor(service: CreateCommentService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const Comment = request.body as Comment;
    const createdComment = await this.service.execute(Comment);

    if (createdComment) {
      return reply.code(202).send(createdComment);
    }

    return reply.badRequest('Invalid _id!');
  }
}

