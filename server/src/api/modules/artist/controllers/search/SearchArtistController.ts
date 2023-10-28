import { FastifyReply, FastifyRequest } from 'fastify';
import { PipelineStage } from 'mongoose';
import SearchArtistService from '../../../../../domain/modules/Artist/services/search/SearchArtistService';

export default class SearchArtistController {
  private service: SearchArtistService;

  constructor(service: SearchArtistService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { page, pageSize } = request.query as { page: number, pageSize: number };

    const pipeline = request.body as PipelineStage[];

    const foundedArtists = await this.service.execute(pipeline, page, pageSize);

    if (foundedArtists) {
      return reply.code(200).send(foundedArtists);
    }

    return reply.badRequest('Invalid _id');
  }
}

