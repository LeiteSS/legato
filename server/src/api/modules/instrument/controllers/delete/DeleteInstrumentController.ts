import { FastifyReply, FastifyRequest } from 'fastify';
import DeleteInstrumentService from '../../../../../domain/modules/instrument/services/delete/DeleteInstrumentService';

export default class DeleteInstrumentController {
  private service: DeleteInstrumentService;

  constructor(service: DeleteInstrumentService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { id } = request.params as { id: string };
    const deletedInstrument = await this.service.execute(id);

    if (!deletedInstrument) {
      return reply.code(202).send(deletedInstrument);
    }

    return reply.badRequest('Invalid _id!');
  }
}

