import { FastifyReply, FastifyRequest } from 'fastify';
import UpdateArtistService from '../../../../../domain/modules/artist/services/update/UpdateArtistService';
import Artist from '../../../../../domain/modules/artist/Artist';

export default class UpdateArtistController {
  private service: UpdateArtistService;

  constructor(service: UpdateArtistService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { id } = request.params as { id: string };
    const artist  = request.body as Artist;
    const updatedArtist = await this.service.execute(id, artist);

    if (updatedArtist) {
      return reply.code(200).send(updatedArtist);
    }

    return reply.badRequest('_id is invalid!');
  }
}

