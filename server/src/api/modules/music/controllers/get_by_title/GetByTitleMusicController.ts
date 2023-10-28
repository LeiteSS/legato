import { FastifyReply, FastifyRequest } from 'fastify';
import GetByTitleMusicService from '../../../../../domain/modules/Music/services/get_by_%Title%/GetByTitleMusicService';

export default class GetByTitleMusicController {
  private service: GetByTitleMusicService;

  constructor(service: GetByTitleMusicService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { Title } = request.params as { Title: string };

    const Music = await this.service.execute(Title);

    if (Music) {
      return reply.code(200).send(Music);
    }

    return reply.badRequest('Invalid _id!');
  }
}

