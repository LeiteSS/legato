import { PipelineStage } from 'mongoose';
import Repository from '../../../../shared/repository/repository';
import Community from '../../Community';
import { Service } from '../../../../shared/interfaces/Service';

export default class GetCommunityService implements Service<Community> {
  private repository: Repository<Community>;

  constructor(repository: Repository<Community>) {
    this.repository = repository;
  }

  public async execute(pipeline: PipelineStage[]): Promise<Community> {
    const foundedCommunity = await this.repository.aggregateOne(pipeline) as Community;

    return foundedCommunity;
  }
}

