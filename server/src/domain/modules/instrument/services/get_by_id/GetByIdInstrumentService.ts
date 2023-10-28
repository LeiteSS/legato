import { Types } from 'mongoose';
import Service from '../../../../shared/interfaces/Service';
import Repository from '../../../../shared/repository/repository';
import Instrument from '../../Instrument';

export default class GetByIdInstrumentService implements Service<Instrument> {
    private repository: Repository<Instrument>;

    constructor(repository: Repository<Instrument>) {
        this.repository = repository;
    }

    public async execute(id: string): Promise<Instrument> {
        const objectId = new Types.ObjectId(id);

        const foundedInstrument = await this.repository
        .aggregateOne([{
            $match: { _id: objectId },
        }]) as Instrument;

        return foundedInstrument;
    }
}
