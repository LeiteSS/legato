import { FastifyReply, FastifyRequest } from 'fastify';
import DeleteCommentService from '../../../../../domain/modules/comment/services/delete/DeleteCommentService';

export default class DeleteCommentController {
  private service: DeleteCommentService;

  constructor(service: DeleteCommentService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { id } = request.params as { id: string };
    const deletedComment = await this.service.execute(id);

    if (!deletedComment) {
      return reply.code(202).send(deletedComment);
    }

    return reply.badRequest('Invalid _id!');
  }
}

