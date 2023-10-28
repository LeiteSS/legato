import { getModelForClass } from '@typegoose/typegoose';
import Repository from '../shared/repository/Repository';
import Post from './Post';

export const PostModel = getModelForClass(Post);

export const PostRepository = new Repository<Post>(PostModel);

