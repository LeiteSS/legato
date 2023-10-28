import { PipelineStage } from 'mongoose';
import Repository from '../../../../shared/repository/repository';
import Comment from '../../Comment';
import { Service } from '../../../../shared/interfaces/Service';

export default class GetCommentService implements Service<Comment> {
  private repository: Repository<Comment>;

  constructor(repository: Repository<Comment>) {
    this.repository = repository;
  }

  public async execute(pipeline: PipelineStage[]): Promise<Comment> {
    const foundedComment = await this.repository.aggregateOne(pipeline) as Comment;

    return foundedComment;
  }
}

