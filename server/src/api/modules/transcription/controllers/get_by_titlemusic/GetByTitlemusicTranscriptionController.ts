import { FastifyReply, FastifyRequest } from 'fastify';
import GetByTitlemusicTranscriptionService from '../../../../../domain/modules/Transcription/services/get_by_%Titlemusic%/GetByTitlemusicTranscriptionService';

export default class GetByTitlemusicTranscriptionController {
  private service: GetByTitlemusicTranscriptionService;

  constructor(service: GetByTitlemusicTranscriptionService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { Titlemusic } = request.params as { Titlemusic: string };

    const Transcription = await this.service.execute(Titlemusic);

    if (Transcription) {
      return reply.code(200).send(Transcription);
    }

    return reply.badRequest('Invalid _id!');
  }
}

