import { Types } from 'mongoose';
import Repository from '../../../../shared/repository/repository';
import User from '../../User';
import  Service  from '../../../../shared/interfaces/Service';

export default class DeleteUserService implements Service<User | null > {
  private repository: Repository<User>;

  constructor(repository: Repository<User>) {
    this.repository = repository;
  }

  public async execute(id: string): Promise<User | null> {
    const objectId = new Types.ObjectId(id);
    const deletedUser = await this.repository.delete(objectId);

    return deletedUser;
  }
}

