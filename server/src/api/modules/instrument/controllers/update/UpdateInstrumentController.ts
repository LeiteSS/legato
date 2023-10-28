import { FastifyReply, FastifyRequest } from 'fastify';
import UpdateInstrumentService from '../../../../../domain/modules/Instrument/services/update/UpdateInstrumentService';
import Instrument from '../../../../../domain/modules/Instrument/Instrument';

export default class UpdatePartialInstrumentController {
  private service: UpdatePartialInstrumentService;

  constructor(service: UpdatePartialInstrumentService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { id } = request.params as { id: string };
    const { Instrument } = request.body as Instrument;
    const updatedInstrument = await this.service.execute(id, Instrument);

    if (updatedInstrument) {
      return reply.code(200).send(updatedInstrument);
    }

    return reply.badRequest('_id is invalid!');
  }
}

