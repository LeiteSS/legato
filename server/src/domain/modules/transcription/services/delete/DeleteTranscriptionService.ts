import { Types } from 'mongoose';
import Repository from '../../../../repository/Repository';
import Transcription from '../../Transcription';
import { Service } from '../../../../shared/interfaces/Service';

export default class DeleteTranscriptionService implements Service<Transcription> {
  private repository: Repository<Transcription>;

  constructor(repository: Repository<Transcription>) {
    this.repository = repository;
  }

  public async execute(id: string): Promise<Transcription> {
    const objectId = new Types.ObjectId(id);
    const deletedTranscription = await this.repository.delete(objectId);

    return deletedTranscription;
  }
}

