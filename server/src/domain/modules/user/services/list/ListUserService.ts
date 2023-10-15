import { PipelineStage } from 'mongoose';
import Repository from '../../../../shared/repository/repository';
import User from '../../User';
import Service from '../../../../shared/interfaces/Service';

export default class ListUserService implements Service<User[]> {
  private repository: Repository<User>;

  constructor(repository: Repository<User>) {
    this.repository = repository;
  }

  public async execute(
    pipeline: PipelineStage[],
    page: number = 0,
    pageSize: number = 10,
  ): Promise<User[]> {
    const foundedUsers = await this.repository.aggregate(
      pipeline,
      page,
      pageSize,
    ) as User[];

    return foundedUsers;
  }
}

