import { FastifyReply, FastifyRequest } from 'fastify';
import { PipelineStage } from 'mongoose';
import SearchInstrumentService from '../../../../../domain/modules/Instrument/services/search/SearchInstrumentService';

export default class SearchInstrumentController {
  private service: SearchInstrumentService;

  constructor(service: SearchInstrumentService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { page, pageSize } = request.query as { page: number, pageSize: number };

    const pipeline = request.body as PipelineStage[];

    const foundedInstruments = await this.service.execute(pipeline, page, pageSize);

    if (foundedInstruments) {
      return reply.code(200).send(foundedInstruments);
    }

    return reply.badRequest('Invalid _id');
  }
}

