import { Types } from 'mongoose';
import Service from '../../../../shared/interfaces/Service';
import Repository from '../../../../shared/repository/repository';
import Transcription from '../../Transcription';

export default class GetByIdTranscriptionService implements Service<Transcription> {
    private repository: Repository<Transcription>;

    constructor(repository: Repository<Transcription>) {
        this.repository = repository;
    }

    public async execute(id: string): Promise<Transcription> {
        const objectId = new Types.ObjectId(id);

        const foundedTranscription = await this.repository
        .aggregateOne([{
            $match: { _id: objectId },
        }]) as Transcription;

        return foundedTranscription;
    }
}
