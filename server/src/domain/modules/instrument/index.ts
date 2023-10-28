import { getModelForClass } from '@typegoose/typegoose';
import Repository from '../shared/repository/Repository';
import Instrument from './Instrument';

export const InstrumentModel = getModelForClass(Instrument);

export const InstrumentRepository = new Repository<Instrument>(InstrumentModel);

