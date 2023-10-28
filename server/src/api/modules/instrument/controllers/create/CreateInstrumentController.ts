import { FastifyReply, FastifyRequest } from 'fastify';
import CreateInstrumentService from '../../../../../domain/modules/Instrument/services/create/CreateInstrumentService';
import Instrument from '../../../../../domain/modules/Instrument/Instrument';

export default class CreateInstrumentController {
  private service: CreateInstrumentService;

  constructor(service: CreateInstrumentService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const Instrument = request.body as Instrument;
    const createdInstrument = await this.service.execute(Instrument);

    if (createdInstrument) {
      return reply.code(202).send(createdInstrument);
    }

    return reply.badRequest('Invalid _id!');
  }
}

