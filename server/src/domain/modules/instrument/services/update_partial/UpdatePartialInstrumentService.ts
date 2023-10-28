import Repository from '../../../../shared/repository/repository';
import Instrument from '../Instrument';
import { Service } from '../../../../shared/interfaces/Service';

export default class UpdatePartialInstrumentService implements Service<Instrument | null> {
    private repository: Repository<Instrument>;

    constructor(repository: Repository<Instrument>) {
      this.repository = repository;
    }

    public async execute(
        id: string,
        requestedInstrument: Instrument,
      ): Promise<Instrument | null> {
        const objectId = new Types.ObjectId(id);
        const requestInstrument = requestedInstrument;
        delete requestInstrument._id;
    
        const updatedInstrument= await this.repository.update(objectId, requestInstrument);
    
        if (updatedInstrument) {
          return updatedInstrument;
        }
    
        return null;
      }
}