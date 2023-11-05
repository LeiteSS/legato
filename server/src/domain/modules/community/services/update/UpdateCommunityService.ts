import { Types } from 'mongoose';
import Service from '../../../../shared/interfaces/Service';
import Community from '../../Community';
import Repository from '../../../../shared/repository/repository';

export default class UpdateCommunityService implements Service<Community | null> {
  private repository: Repository<Community>;

  constructor(repository: Repository<Community>) {
    this.repository = repository;
  }

  public async execute(
    id: string,
    requestedCommunity: Community,
  ): Promise<Community | null> {
    const objectId = new Types.ObjectId(id);
    const requestCommunity = requestedCommunity;
    delete requestCommunity._id;

    const updatedCommunity = await this.repository.updateOne(objectId, requestCommunity);

    if (updatedCommunity) {
      return updatedCommunity;
    }

    return null;
  }
}

