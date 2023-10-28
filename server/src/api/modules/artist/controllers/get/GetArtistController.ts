import { FastifyReply, FastifyRequest } from 'fastify';
import { PipelineStage } from 'mongoose';
import GetArtistService from '../../../../../domain/modules/Artist/services/get/GetArtistService';

export default class GetArtistController {
  private service: GetArtistService;

  constructor(service: GetArtistService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const pipeline = request.body as PipelineStage[];
    const foundedArtists = await this.service.execute(pipeline);

    if (foundedArtists) {
      return reply.code(200).send(foundedArtists);
    }

    return reply.badRequest('Invalid _id!');
  }
}

