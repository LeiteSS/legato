import { RouteShorthandOptions } from 'fastify';
import baseSchema from '../../base';

const getByUserCommentSchema: RouteShorthandOptions = {
  schema: {
    params: {
      User: CommentSchema.User,
    }
  }
}

export default getByUserCommentSchema; 