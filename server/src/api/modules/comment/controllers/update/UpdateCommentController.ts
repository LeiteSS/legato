import { FastifyReply, FastifyRequest } from 'fastify';
import UpdateCommentService from '../../../../../domain/modules/Comment/services/update/UpdateCommentService';
import Comment from '../../../../../domain/modules/Comment/Comment';

export default class UpdatePartialCommentController {
  private service: UpdatePartialCommentService;

  constructor(service: UpdatePartialCommentService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { id } = request.params as { id: string };
    const { Comment } = request.body as Comment;
    const updatedComment = await this.service.execute(id, Comment);

    if (updatedComment) {
      return reply.code(200).send(updatedComment);
    }

    return reply.badRequest('_id is invalid!');
  }
}

