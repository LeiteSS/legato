import { PipelineStage } from 'mongoose';
import Repository from '../../../../shared/repository/repository/repositiory';
import Music from '../../Music';
import { Service } from '../../../../shared/interfaces/Service';

export default class ListMusicService implements Service<Music[]> {
  private repository: Repository<Music>;

  constructor(repository: Repository<Music>) {
    this.repository = repository;
  }

  public async execute(
    pipeline: PipelineStage[],
    page: number = 0,
    pageSize: number = 10,
  ): Promise<Music[]> {
    const foundedMusics = await this.repository.aggregate(
      pipeline,
      page,
      pageSize,
    ) as Music[];

    return foundedMusics;
  }
}

