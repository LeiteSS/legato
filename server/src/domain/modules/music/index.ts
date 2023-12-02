import { getModelForClass } from '@typegoose/typegoose';
import Repository from '../../shared/repository/repository';
import Music from './Music';

export const MusicModel = getModelForClass(Music);

export const musicRepository = new Repository<Music>(MusicModel);

