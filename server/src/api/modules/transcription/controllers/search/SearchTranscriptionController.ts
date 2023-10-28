import { FastifyReply, FastifyRequest } from 'fastify';
import { PipelineStage } from 'mongoose';
import SearchTranscriptionService from '../../../../../domain/modules/Transcription/services/search/SearchTranscriptionService';

export default class SearchTranscriptionController {
  private service: SearchTranscriptionService;

  constructor(service: SearchTranscriptionService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { page, pageSize } = request.query as { page: number, pageSize: number };

    const pipeline = request.body as PipelineStage[];

    const foundedTranscriptions = await this.service.execute(pipeline, page, pageSize);

    if (foundedTranscriptions) {
      return reply.code(200).send(foundedTranscriptions);
    }

    return reply.badRequest('Invalid _id');
  }
}

