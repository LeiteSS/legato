import { FastifyReply, FastifyRequest } from 'fastify';
import ListTranscriptionService from '../../../../../domain/modules/transcription/services/list/ListTranscriptionService';

export default class ListTranscriptionController {
  private service: ListTranscriptionService;

  constructor(service: ListTranscriptionService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { page, pageSize } = request.query as { page: number, pageSize: number };
    const foundedTranscriptions = await this.service.execute(
      [{ $match: {} }],
      page,
      pageSize,
    );

    if (foundedTranscriptions) {
      return reply.code(200).send(foundedTranscriptions);
    }

    return reply.badRequest('Invalid _id');
  }
}

