import { Types } from 'mongoose';
import Repository from '../../../../repository/Repository';
import Artist from '../../Artist';
import { Service } from '../../../../shared/interfaces/Service';

export default class DeleteArtistService implements Service<Artist> {
  private repository: Repository<Artist>;

  constructor(repository: Repository<Artist>) {
    this.repository = repository;
  }

  public async execute(id: string): Promise<Artist> {
    const objectId = new Types.ObjectId(id);
    const deletedArtist = await this.repository.delete(objectId);

    return deletedArtist;
  }
}

