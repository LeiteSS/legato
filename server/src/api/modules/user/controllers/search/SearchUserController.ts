import { FastifyReply, FastifyRequest } from 'fastify';
import { PipelineStage } from 'mongoose';
import SearchUserService from '../../../../../domain/modules/user/services/search/SearchUserService';

export default class SearchUserController {
  private service: SearchUserService;

  constructor(service: SearchUserService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { page, pageSize } = request.query as { page: number, pageSize: number };

    const pipeline = request.body as PipelineStage[];

    const foundedUsers = await this.service.execute(pipeline, page, pageSize);

    if (foundedUsers) {
      return reply.code(200).send(foundedUsers);
    }

    return reply.badRequest('Invalid _id');
  }
}

