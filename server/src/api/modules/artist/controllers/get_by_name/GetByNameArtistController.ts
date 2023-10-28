import { FastifyReply, FastifyRequest } from 'fastify';
import GetByNameArtistService from '../../../../../domain/modules/Artist/services/get_by_%Name%/GetByNameArtistService';

export default class GetByNameArtistController {
  private service: GetByNameArtistService;

  constructor(service: GetByNameArtistService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { Name } = request.params as { Name: string };

    const Artist = await this.service.execute(Name);

    if (Artist) {
      return reply.code(200).send(Artist);
    }

    return reply.badRequest('Invalid _id!');
  }
}

