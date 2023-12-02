import { FastifyReply, FastifyRequest } from 'fastify';
import GetByIdTranscriptionService from '../../../../../domain/modules/transcription/services/get_by_id/GetByIdTranscriptionService';

export default class GetByIdTranscriptionController {
  private service: GetByIdTranscriptionService;

  constructor(service: GetByIdTranscriptionService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { id } = request.params as { id: string };

    const transcription = await this.service.execute(id);

    if (transcription) {
      return reply.code(200).send(transcription);
    }

    return reply.badRequest('Invalid _id!');
  }
}

