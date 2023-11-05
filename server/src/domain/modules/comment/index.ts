import { getModelForClass } from '@typegoose/typegoose';
import Repository from '../../shared/repository/repository';
import Comment from './Comment';

export const CommentModel = getModelForClass(Comment);

export const commentRepository = new Repository<Comment>(CommentModel);

