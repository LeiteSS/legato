import Service from '../../../../shared/interfaces/Service';
import Repository from '../../../../shared/repository/repository';
import Transcription from '../../Transcription';

export default class GetByTitlemusicTranscriptionService implements Service<Transcription> {
    private repository: Repository<Transcription>;

    constructor(repository: Repository<Transcription>) {
        this.repository = repository;
    }

    public async execute(Titlemusic: string): Promise<Transcription> {
        const objectId = new Types.ObjectId(id);

        const foundedTranscription = await this.repository
        .aggregateOne([{
            $match: { Titlemusic },
        }]) as Transcription;

        return foundedTranscription;
    }
}