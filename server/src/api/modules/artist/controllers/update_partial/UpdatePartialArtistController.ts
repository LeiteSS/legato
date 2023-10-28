import { FastifyReply, FastifyRequest } from 'fastify';
import UpdatePartialArtistService from '../../../../../domain/modules/Artist/services/update_partial/UpdatePartialArtistService';
import Artist from '../../../../../domain/modules/Artist/Artist';

export default class UpdatePartialArtistController {
  private service: UpdatePartialArtistService;

  constructor(service: UpdatePartialArtistService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { id, %attribute% } = request.params as { id: string, %attribute%: %type% };

    const updatedArtist = await this.service.execute(id, %attribute%);

    if (updatedArtist ) {
      return reply.code(200).send(updatedArtist);
    }

    return reply.badRequest('_id is invalid!');
  }
}

