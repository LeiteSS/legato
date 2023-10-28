import { FastifyReply, FastifyRequest } from 'fastify';
import GetByUserCommentService from '../../../../../domain/modules/Comment/services/get_by_%User%/GetByUserCommentService';

export default class GetByUserCommentController {
  private service: GetByUserCommentService;

  constructor(service: GetByUserCommentService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { User } = request.params as { User: string };

    const Comment = await this.service.execute(User);

    if (Comment) {
      return reply.code(200).send(Comment);
    }

    return reply.badRequest('Invalid _id!');
  }
}

