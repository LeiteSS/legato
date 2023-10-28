import { FastifyReply, FastifyRequest } from 'fastify';
import UpdateTranscriptionService from '../../../../../domain/modules/Transcription/services/update/UpdateTranscriptionService';
import Transcription from '../../../../../domain/modules/Transcription/Transcription';

export default class UpdatePartialTranscriptionController {
  private service: UpdatePartialTranscriptionService;

  constructor(service: UpdatePartialTranscriptionService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { id } = request.params as { id: string };
    const { Transcription } = request.body as Transcription;
    const updatedTranscription = await this.service.execute(id, Transcription);

    if (updatedTranscription) {
      return reply.code(200).send(updatedTranscription);
    }

    return reply.badRequest('_id is invalid!');
  }
}

