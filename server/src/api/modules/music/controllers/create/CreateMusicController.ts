import { FastifyReply, FastifyRequest } from 'fastify';
import CreateMusicService from '../../../../../domain/modules/music/services/create/CreateMusicService';
import Music from '../../../../../domain/modules/music/Music';

export default class CreateMusicController {
  private service: CreateMusicService;

  constructor(service: CreateMusicService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const music = request.body as Music;
    const createdMusic = await this.service.execute(music);

    return reply.code(202).send(createdMusic);
  }
}

