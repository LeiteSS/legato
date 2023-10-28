import { Types } from 'mongoose';
import Repository from '../../../../repository/Repository';
import Music from '../../Music';
import { Service } from '../../../../shared/interfaces/Service';

export default class DeleteMusicService implements Service<Music> {
  private repository: Repository<Music>;

  constructor(repository: Repository<Music>) {
    this.repository = repository;
  }

  public async execute(id: string): Promise<Music> {
    const objectId = new Types.ObjectId(id);
    const deletedMusic = await this.repository.delete(objectId);

    return deletedMusic;
  }
}

