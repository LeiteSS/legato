import { PipelineStage } from 'mongoose';
import Comment from '../../Comment';
import Repository from '../../../../shared/repository/repository';
import Service from '../../../../shared/interfaces/Service';

export default class ListCommentService implements Service<Comment[]> {
  private repository: Repository<Comment>;

  constructor(repository: Repository<Comment>) {
    this.repository = repository;
  }

  public async execute(
    pipeline: PipelineStage[],
    page: number = 0,
    pageSize: number = 10,
  ): Promise<Comment[]> {
    const foundedComments = await this.repository.aggregate(
      pipeline,
      page,
      pageSize,
    ) as Comment[];

    return foundedComments;
  }
}

