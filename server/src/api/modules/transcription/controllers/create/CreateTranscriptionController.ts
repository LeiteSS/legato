import { FastifyReply, FastifyRequest } from 'fastify';
import CreateTranscriptionService from '../../../../../domain/modules/Transcription/services/create/CreateTranscriptionService';
import Transcription from '../../../../../domain/modules/Transcription/Transcription';

export default class CreateTranscriptionController {
  private service: CreateTranscriptionService;

  constructor(service: CreateTranscriptionService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const Transcription = request.body as Transcription;
    const createdTranscription = await this.service.execute(Transcription);

    if (createdTranscription) {
      return reply.code(202).send(createdTranscription);
    }

    return reply.badRequest('Invalid _id!');
  }
}

