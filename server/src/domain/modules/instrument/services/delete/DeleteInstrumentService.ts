import { Types } from 'mongoose';
import Instrument from '../../Instrument';
import Service from '../../../../shared/interfaces/Service';
import Repository from '../../../../shared/repository/repository';

export default class DeleteInstrumentService implements Service<Instrument | null> {
  private repository: Repository<Instrument>;

  constructor(repository: Repository<Instrument>) {
    this.repository = repository;
  }

  public async execute(id: string): Promise<Instrument | null> {
    const objectId = new Types.ObjectId(id);
    const deletedInstrument = await this.repository.delete(objectId);

    return deletedInstrument;
  }
}

