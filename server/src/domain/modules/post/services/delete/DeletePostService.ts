import { Types } from 'mongoose';
import Post from '../../Post';
import Service from '../../../../shared/interfaces/Service';
import Repository from '../../../../shared/repository/repository';

export default class DeletePostService implements Service<Post | null> {
  private repository: Repository<Post>;

  constructor(repository: Repository<Post>) {
    this.repository = repository;
  }

  public async execute(id: string): Promise<Post | null> {
    const objectId = new Types.ObjectId(id);
    const deletedPost = await this.repository.delete(objectId);

    return deletedPost;
  }
}

