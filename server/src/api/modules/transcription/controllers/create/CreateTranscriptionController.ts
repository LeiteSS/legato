import { FastifyReply, FastifyRequest } from 'fastify';
import CreateTranscriptionService from '../../../../../domain/modules/transcription/services/create/CreateTranscriptionService';
import Transcription from '../../../../../domain/modules/transcription/Transcription';

export default class CreateTranscriptionController {
  private service: CreateTranscriptionService;

  constructor(service: CreateTranscriptionService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const transcription = request.body as Transcription;
    const createdTranscription = await this.service.execute(transcription);

    return reply.code(202).send(createdTranscription);
  }
}

