import { FastifyReply, FastifyRequest } from 'fastify';
import ListArtistService from '../../../../../domain/modules/artist/services/list/ListArtistService';

export default class ListArtistController {
  private service: ListArtistService;

  constructor(service: ListArtistService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { page, pageSize } = request.query as { page: number, pageSize: number };
    const foundedArtists = await this.service.execute(
      [{ $match: {} }],
      page,
      pageSize,
    );

    return reply.code(200).send(foundedArtists);
  }
}

