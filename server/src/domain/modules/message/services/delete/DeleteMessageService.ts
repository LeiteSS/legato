import { Types } from 'mongoose';
import Message from '../../Message';
import Service from '../../../../shared/interfaces/Service';
import Repository from '../../../../shared/repository/repository';

export default class DeleteMessageService implements Service<Message | null> {
  private repository: Repository<Message>;

  constructor(repository: Repository<Message>) {
    this.repository = repository;
  }

  public async execute(id: string): Promise<Message | null> {
    const objectId = new Types.ObjectId(id);
    const deletedMessage = await this.repository.delete(objectId);

    return deletedMessage;
  }
}

