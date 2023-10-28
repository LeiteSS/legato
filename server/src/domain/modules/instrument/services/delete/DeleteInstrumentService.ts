import { Types } from 'mongoose';
import Repository from '../../../../repository/Repository';
import Instrument from '../../Instrument';
import { Service } from '../../../../shared/interfaces/Service';

export default class DeleteInstrumentService implements Service<Instrument> {
  private repository: Repository<Instrument>;

  constructor(repository: Repository<Instrument>) {
    this.repository = repository;
  }

  public async execute(id: string): Promise<Instrument> {
    const objectId = new Types.ObjectId(id);
    const deletedInstrument = await this.repository.delete(objectId);

    return deletedInstrument;
  }
}

