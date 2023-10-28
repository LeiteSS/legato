import { Types } from 'mongoose';
import Service from '../../../../shared/interfaces/Service';
import Repository from '../../../../shared/repository/repository';
import Post from '../../Post';

export default class GetByIdPostService implements Service<Post> {
    private repository: Repository<Post>;

    constructor(repository: Repository<Post>) {
        this.repository = repository;
    }

    public async execute(id: string): Promise<Post> {
        const objectId = new Types.ObjectId(id);

        const foundedPost = await this.repository
        .aggregateOne([{
            $match: { _id: objectId },
        }]) as Post;

        return foundedPost;
    }
}
