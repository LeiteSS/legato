import { Types } from 'mongoose';
import Repository from '../../../../repository/Repository';
import Community from '../../Community';
import { Service } from '../../../../shared/interfaces/Service';

export default class DeleteCommunityService implements Service<Community> {
  private repository: Repository<Community>;

  constructor(repository: Repository<Community>) {
    this.repository = repository;
  }

  public async execute(id: string): Promise<Community> {
    const objectId = new Types.ObjectId(id);
    const deletedCommunity = await this.repository.delete(objectId);

    return deletedCommunity;
  }
}

