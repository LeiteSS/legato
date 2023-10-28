import { FastifyReply, FastifyRequest } from 'fastify';
import UpdatePartialInstrumentService from '../../../../../domain/modules/Instrument/services/update_partial/UpdatePartialInstrumentService';
import Instrument from '../../../../../domain/modules/Instrument/Instrument';

export default class UpdatePartialInstrumentController {
  private service: UpdatePartialInstrumentService;

  constructor(service: UpdatePartialInstrumentService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { id, %attribute% } = request.params as { id: string, %attribute%: %type% };

    const updatedInstrument = await this.service.execute(id, %attribute%);

    if (updatedInstrument ) {
      return reply.code(200).send(updatedInstrument);
    }

    return reply.badRequest('_id is invalid!');
  }
}

