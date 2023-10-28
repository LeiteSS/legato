import { RouteShorthandOptions } from 'fastify';

const createPostSchema: RouteShorthandOptions = {
  schema: {
    body: PostSchema,
  }
}

export default createPostSchema; 