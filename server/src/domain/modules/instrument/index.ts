import { getModelForClass } from '@typegoose/typegoose';
import Instrument from './Instrument';
import Repository from '../../shared/repository/repository';

export const InstrumentModel = getModelForClass(Instrument);

export const instrumentRepository = new Repository<Instrument>(InstrumentModel);

