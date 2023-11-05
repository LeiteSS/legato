import { Types } from 'mongoose';
import Community from '../../Community';
import Service from '../../../../shared/interfaces/Service';
import Repository from '../../../../shared/repository/repository';

export default class DeleteCommunityService implements Service<Community | null> {
  private repository: Repository<Community>;

  constructor(repository: Repository<Community>) {
    this.repository = repository;
  }

  public async execute(id: string): Promise<Community | null> {
    const objectId = new Types.ObjectId(id);
    const deletedCommunity = await this.repository.delete(objectId);

    return deletedCommunity;
  }
}

