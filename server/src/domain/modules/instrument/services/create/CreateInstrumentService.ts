import Service from '../../../../shared/interfaces/Service';
import Repository from '../../../../shared/repository/repository';
import Instrument from '../../Instrument';

export default class CreateInstrumentService implements Service<,Instrument> {
    private repository: Repository<Instrument>;

    constructor(repository: Repository<Instrument>) {
        this.repository = repository;
    }

    public async execute(InstrumentToCreate: Instrument): Promise<Instrument> {
        const createdInstrument = await this.repository.save(InstrumentToCreate);
        return createdInstrument;
    }
}