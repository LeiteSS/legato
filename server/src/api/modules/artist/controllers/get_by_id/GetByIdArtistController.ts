import { FastifyReply, FastifyRequest } from 'fastify';
import GetByIdArtistService from '../../../../../domain/modules/Artist/services/get_by_id/GetByIdArtistService';

export default class GetByIdArtistController {
  private service: GetByIdArtistService;

  constructor(service: GetByIdArtistService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { id } = request.params as { id: string };

    const Artist = await this.service.execute(id);

    if (Artist) {
      return reply.code(200).send(Artist);
    }

    return reply.badRequest('Invalid _id!');
  }
}

