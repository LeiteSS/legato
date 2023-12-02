import { FastifyReply, FastifyRequest } from 'fastify';
import GetByIdCommentService from '../../../../../domain/modules/comment/services/get_by_id/GetByIdCommentService';

export default class GetByIdCommentController {
  private service: GetByIdCommentService;

  constructor(service: GetByIdCommentService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { id } = request.params as { id: string };

    const comment = await this.service.execute(id);

    if (comment) {
      return reply.code(200).send(comment);
    }

    return reply.badRequest('Invalid _id!');
  }
}

