import { RouteShorthandOptions } from 'fastify';
import baseSchema from '../../base';

const updatePostSchema: RouteShorthandOptions = {
  schema: {
    params: {
      id: baseSchema.id,
    },
    body: PostSchema,
  }
}

export default updatePostSchema; 