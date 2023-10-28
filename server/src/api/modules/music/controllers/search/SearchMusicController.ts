import { FastifyReply, FastifyRequest } from 'fastify';
import { PipelineStage } from 'mongoose';
import SearchMusicService from '../../../../../domain/modules/Music/services/search/SearchMusicService';

export default class SearchMusicController {
  private service: SearchMusicService;

  constructor(service: SearchMusicService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { page, pageSize } = request.query as { page: number, pageSize: number };

    const pipeline = request.body as PipelineStage[];

    const foundedMusics = await this.service.execute(pipeline, page, pageSize);

    if (foundedMusics) {
      return reply.code(200).send(foundedMusics);
    }

    return reply.badRequest('Invalid _id');
  }
}

