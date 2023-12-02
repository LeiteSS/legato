import { FastifyReply, FastifyRequest } from 'fastify';
import GetByIdMusicService from '../../../../../domain/modules/music/services/get_by_id/GetByIdMusicService';

export default class GetByIdMusicController {
  private service: GetByIdMusicService;

  constructor(service: GetByIdMusicService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { id } = request.params as { id: string };

    const music = await this.service.execute(id);

    if (music) {
      return reply.code(200).send(music);
    }

    return reply.badRequest('Invalid _id!');
  }
}

