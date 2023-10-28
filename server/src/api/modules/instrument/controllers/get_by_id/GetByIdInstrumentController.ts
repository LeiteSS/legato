import { FastifyReply, FastifyRequest } from 'fastify';
import GetByIdInstrumentService from '../../../../../domain/modules/Instrument/services/get_by_id/GetByIdInstrumentService';

export default class GetByIdInstrumentController {
  private service: GetByIdInstrumentService;

  constructor(service: GetByIdInstrumentService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { id } = request.params as { id: string };

    const Instrument = await this.service.execute(id);

    if (Instrument) {
      return reply.code(200).send(Instrument);
    }

    return reply.badRequest('Invalid _id!');
  }
}

