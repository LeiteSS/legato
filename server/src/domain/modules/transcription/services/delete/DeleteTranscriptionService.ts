import { Types } from 'mongoose';
import Transcription from '../../Transcription';
import Repository from '../../../../shared/repository/repository';
import Service from '../../../../shared/interfaces/Service';

export default class DeleteTranscriptionService implements Service<Transcription | null> {
  private repository: Repository<Transcription>;

  constructor(repository: Repository<Transcription>) {
    this.repository = repository;
  }

  public async execute(id: string): Promise<Transcription | null> {
    const objectId = new Types.ObjectId(id);
    const deletedTranscription = await this.repository.delete(objectId);

    return deletedTranscription;
  }
}

