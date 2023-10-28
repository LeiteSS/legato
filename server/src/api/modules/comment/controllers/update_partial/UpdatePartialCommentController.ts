import { FastifyReply, FastifyRequest } from 'fastify';
import UpdatePartialCommentService from '../../../../../domain/modules/Comment/services/update_partial/UpdatePartialCommentService';
import Comment from '../../../../../domain/modules/Comment/Comment';

export default class UpdatePartialCommentController {
  private service: UpdatePartialCommentService;

  constructor(service: UpdatePartialCommentService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { id, %attribute% } = request.params as { id: string, %attribute%: %type% };

    const updatedComment = await this.service.execute(id, %attribute%);

    if (updatedComment ) {
      return reply.code(200).send(updatedComment);
    }

    return reply.badRequest('_id is invalid!');
  }
}

