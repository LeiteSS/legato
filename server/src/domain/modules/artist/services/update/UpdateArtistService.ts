import { Types } from 'mongoose';
import Service from '../../../../shared/interfaces/Service';
import Artist from '../../Artist';
import Repository from '../../../../shared/repository/repository';

export default class UpdateArtistService implements Service<Artist | null> {
  private repository: Repository<Artist>;

  constructor(repository: Repository<Artist>) {
    this.repository = repository;
  }

  public async execute(
    id: string,
    requestedArtist: Artist,
  ): Promise<Artist | null> {
    const objectId = new Types.ObjectId(id);
    const requestArtist = requestedArtist;
    delete requestArtist._id;

    const updatedArtist = await this.repository.updateOne(objectId, requestArtist);

    if (updatedArtist) {
      return updatedArtist;
    }

    return null;
  }
}

