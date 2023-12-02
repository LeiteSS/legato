import { Types } from 'mongoose';
import Service from '../../../../shared/interfaces/Service';
import Music from '../../Music';
import Repository from '../../../../shared/repository/repository';

export default class UpdateMusicService implements Service<Music | null> {
  private repository: Repository<Music>;

  constructor(repository: Repository<Music>) {
    this.repository = repository;
  }

  public async execute(
    id: string,
    requestedMusic: Music,
  ): Promise<Music | null> {
    const objectId = new Types.ObjectId(id);
    const requestMusic = requestedMusic;
    delete requestMusic._id;

    const updatedMusic = await this.repository.updateOne(objectId, requestMusic);

    if (updatedMusic) {
      return updatedMusic;
    }

    return null;
  }
}

