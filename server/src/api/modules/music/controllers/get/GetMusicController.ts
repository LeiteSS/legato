import { FastifyReply, FastifyRequest } from 'fastify';
import { PipelineStage } from 'mongoose';
import GetMusicService from '../../../../../domain/modules/Music/services/get/GetMusicService';

export default class GetMusicController {
  private service: GetMusicService;

  constructor(service: GetMusicService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const pipeline = request.body as PipelineStage[];
    const foundedMusics = await this.service.execute(pipeline);

    if (foundedMusics) {
      return reply.code(200).send(foundedMusics);
    }

    return reply.badRequest('Invalid _id!');
  }
}

