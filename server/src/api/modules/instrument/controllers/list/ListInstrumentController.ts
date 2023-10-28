import { FastifyReply, FastifyRequest } from 'fastify';
import ListInstrumentService from '../../../../../domain/modules/Instrument/services/list/ListInstrumentService';

export default class ListInstrumentController {
  private service: ListInstrumentService;

  constructor(service: ListInstrumentService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { page, pageSize } = request.query as { page: number, pageSize: number };
    const foundedInstruments = await this.service.execute(
      [{ $match: {} }],
      page,
      pageSize,
    );

    if (foundedInstruments) {
      return reply.code(200).send(foundedInstruments);
    }

    return reply.badRequest('Invalid _id');
  }
}

