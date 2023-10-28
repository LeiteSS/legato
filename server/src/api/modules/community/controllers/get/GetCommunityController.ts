import { FastifyReply, FastifyRequest } from 'fastify';
import { PipelineStage } from 'mongoose';
import GetCommunityService from '../../../../../domain/modules/Community/services/get/GetCommunityService';

export default class GetCommunityController {
  private service: GetCommunityService;

  constructor(service: GetCommunityService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const pipeline = request.body as PipelineStage[];
    const foundedCommunitys = await this.service.execute(pipeline);

    if (foundedCommunitys) {
      return reply.code(200).send(foundedCommunitys);
    }

    return reply.badRequest('Invalid _id!');
  }
}

