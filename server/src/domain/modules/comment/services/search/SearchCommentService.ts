import { PipelineStage } from 'mongoose';
import Repository from '../../../../shared/repository/repository';
import Comment from '../../Comment';
import { Service } from '../../../../shared/interfaces/Service';

export default class SearchCommentService implements Service<Comment[]>  {
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