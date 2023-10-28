import { Types } from 'mongoose';
import Repository from '../../repository/Repository';
import Instrument from '../Instrument';
import { Service } from '../../../shared/interfaces/Service';

export default class UpdateInstrumentService implements Service<Instrument | null> {
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
    delete Instrument._id;

    const updatedInstrument = await this.repository.update(objectId, requestInstrument);

    if (updatedInstrument) {
      return updatedInstrument;
    }

    return null;
  }
}

