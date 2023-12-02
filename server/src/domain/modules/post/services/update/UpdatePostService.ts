import { Types } from 'mongoose';
import Service from '../../../../shared/interfaces/Service';
import Post from '../../Post';
import Repository from '../../../../shared/repository/repository';

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
    delete requestPost._id;

    const updatedPost = await this.repository.updateOne(objectId, requestPost);

    if (updatedPost) {
      return updatedPost;
    }

    return null;
  }
}

