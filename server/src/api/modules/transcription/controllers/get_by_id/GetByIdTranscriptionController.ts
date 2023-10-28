import { FastifyReply, FastifyRequest } from 'fastify';
import GetByIdTranscriptionService from '../../../../../domain/modules/Transcription/services/get_by_id/GetByIdTranscriptionService';

export default class GetByIdTranscriptionController {
  private service: GetByIdTranscriptionService;

  constructor(service: GetByIdTranscriptionService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { id } = request.params as { id: string };

    const Transcription = await this.service.execute(id);

    if (Transcription) {
      return reply.code(200).send(Transcription);
    }

    return reply.badRequest('Invalid _id!');
  }
}

