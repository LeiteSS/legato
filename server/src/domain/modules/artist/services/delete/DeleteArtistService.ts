import { Types } from 'mongoose';
import Artist from '../../Artist';
import Repository from '../../../../shared/repository/repository';
import Service from '../../../../shared/interfaces/Service';

export default class DeleteArtistService implements Service<Artist | null> {
  private repository: Repository<Artist>;

  constructor(repository: Repository<Artist>) {
    this.repository = repository;
  }

  public async execute(id: string): Promise<Artist | null> {
    const objectId = new Types.ObjectId(id);
    const deletedArtist = await this.repository.delete(objectId);

    return deletedArtist;
  }
}

