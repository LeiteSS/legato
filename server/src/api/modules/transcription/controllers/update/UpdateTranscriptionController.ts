import { FastifyReply, FastifyRequest } from 'fastify';
import UpdateTranscriptionService from '../../../../../domain/modules/transcription/services/update/UpdateTranscriptionService';
import Transcription from '../../../../../domain/modules/transcription/Transcription';

export default class UpdateTranscriptionController {
  private service: UpdateTranscriptionService;

  constructor(service: UpdateTranscriptionService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { id } = request.params as { id: string };
    const transcription = request.body as Transcription;
    const updatedTranscription = await this.service.execute(id, transcription);

    if (updatedTranscription) {
      return reply.code(200).send(updatedTranscription);
    }

    return reply.badRequest('_id is invalid!');
  }
}

