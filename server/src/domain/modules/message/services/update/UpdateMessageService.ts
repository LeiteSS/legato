import { Types } from 'mongoose';
import Service from '../../../../shared/interfaces/Service';
import Message from '../../Message';
import Repository from '../../../../shared/repository/repository';

export default class UpdateMessageService implements Service<Message | null> {
  private repository: Repository<Message>;

  constructor(repository: Repository<Message>) {
    this.repository = repository;
  }

  public async execute(
    id: string,
    requestedMessage: Message,
  ): Promise<Message | null> {
    const objectId = new Types.ObjectId(id);
    const requestMessage = requestedMessage;
    delete requestMessage._id;

    const updatedMessage = await this.repository.updateOne(objectId, requestMessage);

    if (updatedMessage) {
      return updatedMessage;
    }

    return null;
  }
}

