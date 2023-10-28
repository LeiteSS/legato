import { RouteShorthandOptions } from 'fastify';

const createCommentSchema: RouteShorthandOptions = {
  schema: {
    body: CommentSchema,
  }
}

export default createCommentSchema; 