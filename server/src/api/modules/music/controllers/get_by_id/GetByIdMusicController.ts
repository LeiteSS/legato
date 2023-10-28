import { FastifyReply, FastifyRequest } from 'fastify';
import GetByIdMusicService from '../../../../../domain/modules/Music/services/get_by_id/GetByIdMusicService';

export default class GetByIdMusicController {
  private service: GetByIdMusicService;

  constructor(service: GetByIdMusicService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { id } = request.params as { id: string };

    const Music = await this.service.execute(id);

    if (Music) {
      return reply.code(200).send(Music);
    }

    return reply.badRequest('Invalid _id!');
  }
}

