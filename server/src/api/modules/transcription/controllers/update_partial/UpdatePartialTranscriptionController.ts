import { FastifyReply, FastifyRequest } from 'fastify';
import UpdatePartialTranscriptionService from '../../../../../domain/modules/Transcription/services/update_partial/UpdatePartialTranscriptionService';
import Transcription from '../../../../../domain/modules/Transcription/Transcription';

export default class UpdatePartialTranscriptionController {
  private service: UpdatePartialTranscriptionService;

  constructor(service: UpdatePartialTranscriptionService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { id, %attribute% } = request.params as { id: string, %attribute%: %type% };

    const updatedTranscription = await this.service.execute(id, %attribute%);

    if (updatedTranscription ) {
      return reply.code(200).send(updatedTranscription);
    }

    return reply.badRequest('_id is invalid!');
  }
}

