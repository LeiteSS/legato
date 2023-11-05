import { Types } from 'mongoose';
import Comment from '../../Comment';
import Service from '../../../../shared/interfaces/Service';
import Repository from '../../../../shared/repository/repository';

export default class DeleteCommentService implements Service<Comment | null> {
  private repository: Repository<Comment>;

  constructor(repository: Repository<Comment>) {
    this.repository = repository;
  }

  public async execute(id: string): Promise<Comment | null> {
    const objectId = new Types.ObjectId(id);
    const deletedComment = await this.repository.delete(objectId);

    return deletedComment;
  }
}

