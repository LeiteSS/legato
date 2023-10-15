import { Types } from 'mongoose';
import Repository from '../../../../shared/repository/repository';
import User from '../../User';
import Service from '../../../../shared/interfaces/Service';

export default class UpdateUserService implements Service<User | null> {
  private repository: Repository<User>;

  constructor(repository: Repository<User>) {
    this.repository = repository;
  }

  public async execute(
    id: string,
    requestedUser: User,
  ): Promise<User | null> {
    const objectId = new Types.ObjectId(id);
    const requestUser = requestedUser;
 
    const updatedUser = await this.repository.updateOne(objectId, requestUser);

    if (updatedUser) {
      return updatedUser;
    }

    return null;
  }
}

