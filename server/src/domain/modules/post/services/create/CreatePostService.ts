import Service from '../../../../shared/interfaces/Service';
import Repository from '../../../../shared/repository/repository';
import Post from '../../Post';

export default class CreatePostService implements Service<Post> {
    private repository: Repository<Post>;

    constructor(repository: Repository<Post>) {
        this.repository = repository;
    }

    public async execute(PostToCreate: Post): Promise<Post> {
        const createdPost = await this.repository.save(PostToCreate);
        return createdPost;
    }
}