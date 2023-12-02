import { FastifyReply, FastifyRequest } from 'fastify';
import DeleteTranscriptionService from '../../../../../domain/modules/transcription/services/delete/DeleteTranscriptionService';

export default class DeleteTranscriptionController {
  private service: DeleteTranscriptionService;

  constructor(service: DeleteTranscriptionService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { id } = request.params as { id: string };
    const deletedTranscription = await this.service.execute(id);

    if (!deletedTranscription) {
      return reply.code(202).send(deletedTranscription);
    }

    return reply.badRequest('Invalid _id!');
  }
}

