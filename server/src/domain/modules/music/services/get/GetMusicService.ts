import { PipelineStage } from 'mongoose';
import Repository from '../../../../shared/repository/repository';
import Music from '../../Music';
import { Service } from '../../../../shared/interfaces/Service';

export default class GetMusicService implements Service<Music> {
  private repository: Repository<Music>;

  constructor(repository: Repository<Music>) {
    this.repository = repository;
  }

  public async execute(pipeline: PipelineStage[]): Promise<Music> {
    const foundedMusic = await this.repository.aggregateOne(pipeline) as Music;

    return foundedMusic;
  }
}

