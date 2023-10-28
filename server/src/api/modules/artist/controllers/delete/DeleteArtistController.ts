import { FastifyReply, FastifyRequest } from 'fastify';
import DeleteArtistService from '../../../../../domain/modules/Artist/services/delete/DeleteArtistService';

export default class DeleteArtistController {
  private service: DeleteArtistService;

  constructor(service: DeleteArtistService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { id } = request.params as { id: string };
    const deletedArtist = await this.service.execute(id);

    if (!deletedArtist) {
      return reply.code(202).send(deletedArtist);
    }

    return reply.badRequest('Invalid _id!');
  }
}

