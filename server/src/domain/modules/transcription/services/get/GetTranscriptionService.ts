import { PipelineStage } from 'mongoose';
import Repository from '../../../../shared/repository/repository';
import Transcription from '../../Transcription';
import { Service } from '../../../../shared/interfaces/Service';

export default class GetTranscriptionService implements Service<Transcription> {
  private repository: Repository<Transcription>;

  constructor(repository: Repository<Transcription>) {
    this.repository = repository;
  }

  public async execute(pipeline: PipelineStage[]): Promise<Transcription> {
    const foundedTranscription = await this.repository.aggregateOne(pipeline) as Transcription;

    return foundedTranscription;
  }
}

