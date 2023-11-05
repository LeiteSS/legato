import { PipelineStage } from 'mongoose';
import Community from '../../Community';
import Service from '../../../../shared/interfaces/Service';
import Repository from '../../../../shared/repository/repository';

export default class ListCommunityService implements Service<Community[]> {
  private repository: Repository<Community>;

  constructor(repository: Repository<Community>) {
    this.repository = repository;
  }

  public async execute(
    pipeline: PipelineStage[],
    page: number = 0,
    pageSize: number = 10,
  ): Promise<Community[]> {
    const foundedCommunitys = await this.repository.aggregate(
      pipeline,
      page,
      pageSize,
    ) as Community[];

    return foundedCommunitys;
  }
}

