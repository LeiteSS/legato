import { Types } from 'mongoose';
import Service from '../../../../shared/interfaces/Service';
import Repository from '../../../../shared/repository/repository';
import Comment from '../../Comment';

export default class GetByIdCommentService implements Service<Comment> {
    private repository: Repository<Comment>;

    constructor(repository: Repository<Comment>) {
        this.repository = repository;
    }

    public async execute(id: string): Promise<Comment> {
        const objectId = new Types.ObjectId(id);

        const foundedComment = await this.repository
        .aggregateOne([{
            $match: { _id: objectId },
        }]) as Comment;

        return foundedComment;
    }
}
