import { Types } from 'mongoose';
import Music from '../../Music';
import Service from '../../../../shared/interfaces/Service';
import Repository from '../../../../shared/repository/repository';

export default class DeleteMusicService implements Service<Music | null> {
  private repository: Repository<Music>;

  constructor(repository: Repository<Music>) {
    this.repository = repository;
  }

  public async execute(id: string): Promise<Music | null> {
    const objectId = new Types.ObjectId(id);
    const deletedMusic = await this.repository.delete(objectId);

    return deletedMusic;
  }
}

