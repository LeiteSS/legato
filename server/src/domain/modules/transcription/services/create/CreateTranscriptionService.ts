import Service from '../../../../shared/interfaces/Service';
import Repository from '../../../../shared/repository/repository';
import Transcription from '../../Transcription';

export default class CreateTranscriptionService implements Service<Transcription> {
    private repository: Repository<Transcription>;

    constructor(repository: Repository<Transcription>) {
        this.repository = repository;
    }

    public async execute(TranscriptionToCreate: Transcription): Promise<Transcription> {
        const createdTranscription = await this.repository.save(TranscriptionToCreate);
        return createdTranscription;
    }
}