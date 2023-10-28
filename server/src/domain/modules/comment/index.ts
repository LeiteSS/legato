import { getModelForClass } from '@typegoose/typegoose';
import Repository from '../shared/repository/Repository';
import Comment from './Comment';

export const CommentModel = getModelForClass(Comment);

export const CommentRepository = new Repository<Comment>(CommentModel);

