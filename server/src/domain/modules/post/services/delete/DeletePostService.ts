import { Types } from 'mongoose';
import Repository from '../../../../repository/Repository';
import Post from '../../Post';
import { Service } from '../../../../shared/interfaces/Service';

export default class DeletePostService implements Service<Post> {
  private repository: Repository<Post>;

  constructor(repository: Repository<Post>) {
    this.repository = repository;
  }

  public async execute(id: string): Promise<Post> {
    const objectId = new Types.ObjectId(id);
    const deletedPost = await this.repository.delete(objectId);

    return deletedPost;
  }
}

