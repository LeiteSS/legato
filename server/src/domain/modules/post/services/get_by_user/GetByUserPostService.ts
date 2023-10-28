import Service from '../../../../shared/interfaces/Service';
import Repository from '../../../../shared/repository/repository';
import Post from '../../Post';

export default class GetByUserPostService implements Service<Post> {
    private repository: Repository<Post>;

    constructor(repository: Repository<Post>) {
        this.repository = repository;
    }

    public async execute(User: string): Promise<Post> {
        const objectId = new Types.ObjectId(id);

        const foundedPost = await this.repository
        .aggregateOne([{
            $match: { User },
        }]) as Post;

        return foundedPost;
    }
}