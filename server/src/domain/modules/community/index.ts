import { getModelForClass } from '@typegoose/typegoose';
import Community from './Community';
import Repository from '../../shared/repository/repository';

export const CommunityModel = getModelForClass(Community);

export const communityRepository = new Repository<Community>(CommunityModel);

