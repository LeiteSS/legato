import { Types } from 'mongoose';
import Repository from '../../repository/Repository';
import Post from '../Post';
import { Service } from '../../../shared/interfaces/Service';

export default class UpdatePostService implements Service<Post | null> {
  private repository: Repository<Post>;

  constructor(repository: Repository<Post>) {
    this.repository = repository;
  }

  public async execute(
    id: string,
    requestedPost: Post,
  ): Promise<Post | null> {
    const objectId = new Types.ObjectId(id);
    const requestPost = requestedPost;
    delete Post._id;

    const updatedPost = await this.repository.update(objectId, requestPost);

    if (updatedPost) {
      return updatedPost;
    }

    return null;
  }
}

