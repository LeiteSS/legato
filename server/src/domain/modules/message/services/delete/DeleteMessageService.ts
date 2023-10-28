import { Types } from 'mongoose';
import Repository from '../../../../repository/Repository';
import Message from '../../Message';
import { Service } from '../../../../shared/interfaces/Service';

export default class DeleteMessageService implements Service<Message> {
  private repository: Repository<Message>;

  constructor(repository: Repository<Message>) {
    this.repository = repository;
  }

  public async execute(id: string): Promise<Message> {
    const objectId = new Types.ObjectId(id);
    const deletedMessage = await this.repository.delete(objectId);

    return deletedMessage;
  }
}

