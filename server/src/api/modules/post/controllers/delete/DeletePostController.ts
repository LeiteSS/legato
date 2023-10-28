import { FastifyReply, FastifyRequest } from 'fastify';
import DeletePostService from '../../../../../domain/modules/Post/services/delete/DeletePostService';

export default class DeletePostController {
  private service: DeletePostService;

  constructor(service: DeletePostService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { id } = request.params as { id: string };
    const deletedPost = await this.service.execute(id);

    if (!deletedPost) {
      return reply.code(202).send(deletedPost);
    }

    return reply.badRequest('Invalid _id!');
  }
}

