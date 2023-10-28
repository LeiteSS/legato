import { FastifyReply, FastifyRequest } from 'fastify';
import GetByDestinationMessageService from '../../../../../domain/modules/Message/services/get_by_%Destination%/GetByDestinationMessageService';

export default class GetByDestinationMessageController {
  private service: GetByDestinationMessageService;

  constructor(service: GetByDestinationMessageService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { Destination } = request.params as { Destination: string };

    const Message = await this.service.execute(Destination);

    if (Message) {
      return reply.code(200).send(Message);
    }

    return reply.badRequest('Invalid _id!');
  }
}

