import { FastifyReply, FastifyRequest } from 'fastify';
import { PipelineStage } from 'mongoose';
import GetTranscriptionService from '../../../../../domain/modules/Transcription/services/get/GetTranscriptionService';

export default class GetTranscriptionController {
  private service: GetTranscriptionService;

  constructor(service: GetTranscriptionService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const pipeline = request.body as PipelineStage[];
    const foundedTranscriptions = await this.service.execute(pipeline);

    if (foundedTranscriptions) {
      return reply.code(200).send(foundedTranscriptions);
    }

    return reply.badRequest('Invalid _id!');
  }
}

