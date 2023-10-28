import { Types } from 'mongoose';
import Repository from '../../../../repository/Repository';
import Comment from '../../Comment';
import { Service } from '../../../../shared/interfaces/Service';

export default class DeleteCommentService implements Service<Comment> {
  private repository: Repository<Comment>;

  constructor(repository: Repository<Comment>) {
    this.repository = repository;
  }

  public async execute(id: string): Promise<Comment> {
    const objectId = new Types.ObjectId(id);
    const deletedComment = await this.repository.delete(objectId);

    return deletedComment;
  }
}

