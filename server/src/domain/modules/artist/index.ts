import { getModelForClass } from '@typegoose/typegoose';
import Artist from './Artist';
import Repository from '../../shared/repository/repository';

export const artistModel = getModelForClass(Artist);

export const artistRepository = new Repository<Artist>(artistModel);

