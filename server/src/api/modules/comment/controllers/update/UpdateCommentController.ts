import { FastifyReply, FastifyRequest } from 'fastify';
import Comment from '../../../../../domain/modules/comment/Comment';
import UpdateCommentService from '../../../../../domain/modules/comment/services/update/UpdateCommentService';

export default class UpdateCommentController {
  private service: UpdateCommentService;

  constructor(service: UpdateCommentService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { id } = request.params as { id: string };
    const comment = request.body as Comment;
    const updatedComment = await this.service.execute(id, comment);

    if (updatedComment) {
      return reply.code(200).send(updatedComment);
    }

    return reply.badRequest('_id is invalid!');
  }
}

