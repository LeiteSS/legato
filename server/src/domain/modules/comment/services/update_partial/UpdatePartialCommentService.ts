import Repository from '../../../../shared/repository/repository';
import Comment from '../Comment';
import { Service } from '../../../../shared/interfaces/Service';

export default class UpdatePartialCommentService implements Service<Comment | null> {
    private repository: Repository<Comment>;

    constructor(repository: Repository<Comment>) {
      this.repository = repository;
    }

    public async execute(
        id: string,
        requestedComment: Comment,
      ): Promise<Comment | null> {
        const objectId = new Types.ObjectId(id);
        const requestComment = requestedComment;
        delete requestComment._id;
    
        const updatedComment= await this.repository.update(objectId, requestComment);
    
        if (updatedComment) {
          return updatedComment;
        }
    
        return null;
      }
}