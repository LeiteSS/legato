import { FastifyReply, FastifyRequest } from 'fastify';
import Comment from '../../../../../domain/modules/Comment/Comment';
import CreateCommentService from '../../../../../domain/modules/comment/services/create/CreateCommentService';

export default class CreateCommentController {
  private service: CreateCommentService;

  constructor(service: CreateCommentService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const Comment = request.body as Comment;
    const createdComment = await this.service.execute(Comment);

    return reply.code(202).send(createdComment);
  }
}

