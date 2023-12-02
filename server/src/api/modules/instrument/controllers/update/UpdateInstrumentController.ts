import { FastifyReply, FastifyRequest } from 'fastify';
import UpdateInstrumentService from '../../../../../domain/modules/instrument/services/update/UpdateInstrumentService';
import Instrument from '../../../../../domain/modules/instrument/Instrument';

export default class UpdateInstrumentController {
  private service: UpdateInstrumentService;

  constructor(service: UpdateInstrumentService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { id } = request.params as { id: string };
    const instrument = request.body as Instrument;
    const updatedInstrument = await this.service.execute(id, instrument);

    if (updatedInstrument) {
      return reply.code(200).send(updatedInstrument);
    }

    return reply.badRequest('_id is invalid!');
  }
}

