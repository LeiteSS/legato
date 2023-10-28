import { PipelineStage } from 'mongoose';
import Repository from '../../../../shared/repository/repository';
import Post from '../../Post';
import { Service } from '../../../../shared/interfaces/Service';

export default class GetPostService implements Service<Post> {
  private repository: Repository<Post>;

  constructor(repository: Repository<Post>) {
    this.repository = repository;
  }

  public async execute(pipeline: PipelineStage[]): Promise<Post> {
    const foundedPost = await this.repository.aggregateOne(pipeline) as Post;

    return foundedPost;
  }
}

