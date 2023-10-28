import { getModelForClass } from '@typegoose/typegoose';
import Repository from '../shared/repository/Repository';
import Community from './Community';

export const CommunityModel = getModelForClass(Community);

export const CommunityRepository = new Repository<Community>(CommunityModel);

