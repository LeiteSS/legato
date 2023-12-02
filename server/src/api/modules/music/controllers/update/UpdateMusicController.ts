import { FastifyReply, FastifyRequest } from 'fastify';
import UpdateMusicService from '../../../../../domain/modules/music/services/update/UpdateMusicService';
import Music from '../../../../../domain/modules/music/Music';

export default class UpdateMusicController {
  private service: UpdateMusicService;

  constructor(service: UpdateMusicService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { id } = request.params as { id: string };
    const music = request.body as Music;
    const updatedMusic = await this.service.execute(id, music);

    if (updatedMusic) {
      return reply.code(200).send(updatedMusic);
    }

    return reply.badRequest('_id is invalid!');
  }
}

