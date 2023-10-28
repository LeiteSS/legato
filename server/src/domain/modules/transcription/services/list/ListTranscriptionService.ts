import { PipelineStage } from 'mongoose';
import Repository from '../../../../shared/repository/repository/repositiory';
import Transcription from '../../Transcription';
import { Service } from '../../../../shared/interfaces/Service';

export default class ListTranscriptionService implements Service<Transcription[]> {
  private repository: Repository<Transcription>;

  constructor(repository: Repository<Transcription>) {
    this.repository = repository;
  }

  public async execute(
    pipeline: PipelineStage[],
    page: number = 0,
    pageSize: number = 10,
  ): Promise<Transcription[]> {
    const foundedTranscriptions = await this.repository.aggregate(
      pipeline,
      page,
      pageSize,
    ) as Transcription[];

    return foundedTranscriptions;
  }
}

