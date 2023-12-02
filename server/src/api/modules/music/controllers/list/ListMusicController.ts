import { FastifyReply, FastifyRequest } from 'fastify';
import ListMusicService from '../../../../../domain/modules/music/services/list/ListMusicService';

export default class ListMusicController {
  private service: ListMusicService;

  constructor(service: ListMusicService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { page, pageSize } = request.query as { page: number, pageSize: number };
    const foundedMusics = await this.service.execute(
      [{ $match: {} }],
      page,
      pageSize,
    );

    if (foundedMusics) {
      return reply.code(200).send(foundedMusics);
    }

    return reply.badRequest('Invalid _id');
  }
}

