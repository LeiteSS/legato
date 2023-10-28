import { Types } from 'mongoose';
import Repository from '../../repository/Repository';
import Community from '../Community';
import { Service } from '../../../shared/interfaces/Service';

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
    delete Community._id;

    const updatedCommunity = await this.repository.update(objectId, requestCommunity);

    if (updatedCommunity) {
      return updatedCommunity;
    }

    return null;
  }
}

