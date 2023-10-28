import { PipelineStage } from 'mongoose';
import Repository from '../../../../shared/repository/repository';
import Instrument from '../../Instrument';
import { Service } from '../../../../shared/interfaces/Service';

export default class SearchInstrumentService implements Service<Instrument[]>  {
    private repository: Repository<Instrument>;

    constructor(repository: Repository<Instrument>) {
        this.repository = repository;
    }

    public async execute(
        pipeline: PipelineStage[],
        page: number = 0,
        pageSize: number = 10,
      ): Promise<Instrument[]> {
        const foundedInstruments = await this.repository.aggregate(
          pipeline,
          page,
          pageSize,
        ) as Instrument[];
    
        return foundedInstruments;
    }
}