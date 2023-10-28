import { FastifyReply, FastifyRequest } from 'fastify';
import GetByInstrumentnameInstrumentService from '../../../../../domain/modules/Instrument/services/get_by_%Instrumentname%/GetByInstrumentnameInstrumentService';

export default class GetByInstrumentnameInstrumentController {
  private service: GetByInstrumentnameInstrumentService;

  constructor(service: GetByInstrumentnameInstrumentService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { Instrumentname } = request.params as { Instrumentname: string };

    const Instrument = await this.service.execute(Instrumentname);

    if (Instrument) {
      return reply.code(200).send(Instrument);
    }

    return reply.badRequest('Invalid _id!');
  }
}

