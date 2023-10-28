import { FastifyReply, FastifyRequest } from 'fastify';
import CreateMusicService from '../../../../../domain/modules/Music/services/create/CreateMusicService';
import Music from '../../../../../domain/modules/Music/Music';

export default class CreateMusicController {
  private service: CreateMusicService;

  constructor(service: CreateMusicService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const Music = request.body as Music;
    const createdMusic = await this.service.execute(Music);

    if (createdMusic) {
      return reply.code(202).send(createdMusic);
    }

    return reply.badRequest('Invalid _id!');
  }
}

