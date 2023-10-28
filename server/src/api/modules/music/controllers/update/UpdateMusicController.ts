import { FastifyReply, FastifyRequest } from 'fastify';
import UpdateMusicService from '../../../../../domain/modules/Music/services/update/UpdateMusicService';
import Music from '../../../../../domain/modules/Music/Music';

export default class UpdatePartialMusicController {
  private service: UpdatePartialMusicService;

  constructor(service: UpdatePartialMusicService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { id } = request.params as { id: string };
    const { Music } = request.body as Music;
    const updatedMusic = await this.service.execute(id, Music);

    if (updatedMusic) {
      return reply.code(200).send(updatedMusic);
    }

    return reply.badRequest('_id is invalid!');
  }
}

