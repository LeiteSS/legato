import Repository from '../../../../shared/repository/repository';
import Transcription from '../Transcription';
import { Service } from '../../../../shared/interfaces/Service';

export default class UpdatePartialTranscriptionService implements Service<Transcription | null> {
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
    
        const updatedTranscription= await this.repository.update(objectId, requestTranscription);
    
        if (updatedTranscription) {
          return updatedTranscription;
        }
    
        return null;
      }
}