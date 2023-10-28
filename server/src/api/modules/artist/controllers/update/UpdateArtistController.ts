import { FastifyReply, FastifyRequest } from 'fastify';
import UpdateArtistService from '../../../../../domain/modules/Artist/services/update/UpdateArtistService';
import Artist from '../../../../../domain/modules/Artist/Artist';

export default class UpdatePartialArtistController {
  private service: UpdatePartialArtistService;

  constructor(service: UpdatePartialArtistService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { id } = request.params as { id: string };
    const { Artist } = request.body as Artist;
    const updatedArtist = await this.service.execute(id, Artist);

    if (updatedArtist) {
      return reply.code(200).send(updatedArtist);
    }

    return reply.badRequest('_id is invalid!');
  }
}

