import { PipelineStage } from 'mongoose';
import Repository from '../../../../shared/repository/repository';
import Message from '../../Message';
import Service from '../../../../shared/interfaces/Service';

export default class ListMessageService implements Service<Message[]> {
  private repository: Repository<Message>;

  constructor(repository: Repository<Message>) {
    this.repository = repository;
  }

  public async execute(
    pipeline: PipelineStage[],
    page: number = 0,
    pageSize: number = 10,
  ): Promise<Message[]> {
    const foundedMessages = await this.repository.aggregate(
      pipeline,
      page,
      pageSize,
    ) as Message[];

    return foundedMessages;
  }
}

