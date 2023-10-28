import { RouteShorthandOptions } from 'fastify';
import baseSchema from '../../base';

const updateCommentSchema: RouteShorthandOptions = {
  schema: {
    params: {
      id: baseSchema.id,
    },
    body: CommentSchema,
  }
}

export default updateCommentSchema; 