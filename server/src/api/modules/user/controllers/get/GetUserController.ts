import { FastifyReply, FastifyRequest } from 'fastify';
import { PipelineStage } from 'mongoose';
import GetUserService from '../../../../../domain/modules/user/services/get/GetUserService';

export default class GetUserController {
  private service: GetUserService;

  constructor(service: GetUserService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const pipeline = request.body as PipelineStage[];
    const foundedUsers = await this.service.execute(pipeline);

    if (foundedUsers) {
      return reply.code(200).send(foundedUsers);
    }

    return reply.badRequest('Invalid _id!');
  }
}

