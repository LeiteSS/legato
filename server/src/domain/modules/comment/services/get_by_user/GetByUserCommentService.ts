import Service from '../../../../shared/interfaces/Service';
import Repository from '../../../../shared/repository/repository';
import Comment from '../../Comment';

export default class GetByUserCommentService implements Service<Comment> {
    private repository: Repository<Comment>;

    constructor(repository: Repository<Comment>) {
        this.repository = repository;
    }

    public async execute(User: string): Promise<Comment> {
        const objectId = new Types.ObjectId(id);

        const foundedComment = await this.repository
        .aggregateOne([{
            $match: { User },
        }]) as Comment;

        return foundedComment;
    }
}