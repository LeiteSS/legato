import { PipelineStage } from 'mongoose';
import Repository from '../../../../shared/repository/repository';
import Message from '../../Message';
import { Service } from '../../../../shared/interfaces/Service';

export default class GetMessageService implements Service<Message> {
  private repository: Repository<Message>;

  constructor(repository: Repository<Message>) {
    this.repository = repository;
  }

  public async execute(pipeline: PipelineStage[]): Promise<Message> {
    const foundedMessage = await this.repository.aggregateOne(pipeline) as Message;

    return foundedMessage;
  }
}

