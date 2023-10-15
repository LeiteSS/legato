import { PipelineStage } from 'mongoose';
import Repository from '../../../../shared/repository/repository';
import User from '../../User';
import Service from '../../../../shared/interfaces/Service';

export default class GetUserService implements Service<User> {
  private repository: Repository<User>;

  constructor(repository: Repository<User>) {
    this.repository = repository;
  }

  public async execute(pipeline: PipelineStage[]): Promise<User> {
    const foundedUser = await this.repository.aggregateOne(pipeline) as User;

    return foundedUser;
  }
}

