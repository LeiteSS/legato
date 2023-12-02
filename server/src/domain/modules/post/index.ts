import { getModelForClass } from '@typegoose/typegoose';
import Post from './Post';
import Repository from '../../shared/repository/repository';

export const PostModel = getModelForClass(Post);

export const postRepository = new Repository<Post>(PostModel);

