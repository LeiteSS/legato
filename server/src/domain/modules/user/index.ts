import { getModelForClass } from '@typegoose/typegoose';
import Repository from '../../shared/repository/repository';
import User from './User';

export const UserModel = getModelForClass(User);

export const UserRepository = new Repository<User>(UserModel);

