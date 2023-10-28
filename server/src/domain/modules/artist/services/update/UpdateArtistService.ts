import { Types } from 'mongoose';
import Repository from '../../repository/Repository';
import Artist from '../Artist';
import { Service } from '../../../shared/interfaces/Service';

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
    delete Artist._id;

    const updatedArtist = await this.repository.update(objectId, requestArtist);

    if (updatedArtist) {
      return updatedArtist;
    }

    return null;
  }
}

