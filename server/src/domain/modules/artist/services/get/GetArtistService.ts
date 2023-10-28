import { PipelineStage } from 'mongoose';
import Repository from '../../../../shared/repository/repository';
import Artist from '../../Artist';
import { Service } from '../../../../shared/interfaces/Service';

export default class GetArtistService implements Service<Artist> {
  private repository: Repository<Artist>;

  constructor(repository: Repository<Artist>) {
    this.repository = repository;
  }

  public async execute(pipeline: PipelineStage[]): Promise<Artist> {
    const foundedArtist = await this.repository.aggregateOne(pipeline) as Artist;

    return foundedArtist;
  }
}

