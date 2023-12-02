import { FastifyReply, FastifyRequest } from 'fastify';
import DeleteMusicService from '../../../../../domain/modules/music/services/delete/DeleteMusicService';

export default class DeleteMusicController {
  private service: DeleteMusicService;

  constructor(service: DeleteMusicService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { id } = request.params as { id: string };
    const deletedMusic = await this.service.execute(id);

    if (!deletedMusic) {
      return reply.code(202).send(deletedMusic);
    }

    return reply.badRequest('Invalid _id!');
  }
}

