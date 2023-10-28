import { Types } from 'mongoose';
import Repository from '../../repository/Repository';
import Music from '../Music';
import { Service } from '../../../shared/interfaces/Service';

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
    delete Music._id;

    const updatedMusic = await this.repository.update(objectId, requestMusic);

    if (updatedMusic) {
      return updatedMusic;
    }

    return null;
  }
}

