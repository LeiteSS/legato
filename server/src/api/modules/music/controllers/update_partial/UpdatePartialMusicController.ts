import { FastifyReply, FastifyRequest } from 'fastify';
import UpdatePartialMusicService from '../../../../../domain/modules/Music/services/update_partial/UpdatePartialMusicService';
import Music from '../../../../../domain/modules/Music/Music';

export default class UpdatePartialMusicController {
  private service: UpdatePartialMusicService;

  constructor(service: UpdatePartialMusicService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { id, %attribute% } = request.params as { id: string, %attribute%: %type% };

    const updatedMusic = await this.service.execute(id, %attribute%);

    if (updatedMusic ) {
      return reply.code(200).send(updatedMusic);
    }

    return reply.badRequest('_id is invalid!');
  }
}

