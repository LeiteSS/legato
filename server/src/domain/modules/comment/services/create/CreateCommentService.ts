import Service from '../../../../shared/interfaces/Service';
import Repository from '../../../../shared/repository/repository';
import Comment from '../../Comment';

export default class CreateCommentService implements Service<,Comment> {
    private repository: Repository<Comment>;

    constructor(repository: Repository<Comment>) {
        this.repository = repository;
    }

    public async execute(CommentToCreate: Comment): Promise<Comment> {
        const createdComment = await this.repository.save(CommentToCreate);
        return createdComment;
    }
}