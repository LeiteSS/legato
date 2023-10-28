import { FastifyReply, FastifyRequest } from 'fastify';
import UpdatePartialPostService from '../../../../../domain/modules/Post/services/update_partial/UpdatePartialPostService';
import Post from '../../../../../domain/modules/Post/Post';

export default class UpdatePartialPostController {
  private service: UpdatePartialPostService;

  constructor(service: UpdatePartialPostService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { id, %attribute% } = request.params as { id: string, %attribute%: %type% };

    const updatedPost = await this.service.execute(id, %attribute%);

    if (updatedPost ) {
      return reply.code(200).send(updatedPost);
    }

    return reply.badRequest('_id is invalid!');
  }
}

