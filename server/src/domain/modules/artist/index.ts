import { getModelForClass } from '@typegoose/typegoose';
import Repository from '../shared/repository/Repository';
import Artist from './Artist';

export const ArtistModel = getModelForClass(Artist);

export const ArtistRepository = new Repository<Artist>(ArtistModel);

