import { PipelineStage } from 'mongoose';
import Repository from '../../../../shared/repository/repository';
import Instrument from '../../Instrument';
import { Service } from '../../../../shared/interfaces/Service';

export default class GetInstrumentService implements Service<Instrument> {
  private repository: Repository<Instrument>;

  constructor(repository: Repository<Instrument>) {
    this.repository = repository;
  }

  public async execute(pipeline: PipelineStage[]): Promise<Instrument> {
    const foundedInstrument = await this.repository.aggregateOne(pipeline) as Instrument;

    return foundedInstrument;
  }
}

