import { FastifyReply, FastifyRequest } from 'fastify';
import { PipelineStage } from 'mongoose';
import GetInstrumentService from '../../../../../domain/modules/Instrument/services/get/GetInstrumentService';

export default class GetInstrumentController {
  private service: GetInstrumentService;

  constructor(service: GetInstrumentService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const pipeline = request.body as PipelineStage[];
    const foundedInstruments = await this.service.execute(pipeline);

    if (foundedInstruments) {
      return reply.code(200).send(foundedInstruments);
    }

    return reply.badRequest('Invalid _id!');
  }
}

