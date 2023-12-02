import { Types } from 'mongoose';
import Service from '../../../../shared/interfaces/Service';
import Transcription from '../../Transcription';
import Repository from '../../../../shared/repository/repository';

export default class UpdateTranscriptionService implements Service<Transcription | null> {
  private repository: Repository<Transcription>;

  constructor(repository: Repository<Transcription>) {
    this.repository = repository;
  }

  public async execute(
    id: string,
    requestedTranscription: Transcription,
  ): Promise<Transcription | null> {
    const objectId = new Types.ObjectId(id);
    const requestTranscription = requestedTranscription;
    delete requestTranscription._id;

    const updatedTranscription = await this.repository.updateOne(objectId, requestTranscription);

    if (updatedTranscription) {
      return updatedTranscription;
    }

    return null;
  }
}

