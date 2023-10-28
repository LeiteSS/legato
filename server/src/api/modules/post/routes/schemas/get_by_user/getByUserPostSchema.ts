import { RouteShorthandOptions } from 'fastify';
import baseSchema from '../../base';

const getByUserPostSchema: RouteShorthandOptions = {
  schema: {
    params: {
      User: PostSchema.User,
    }
  }
}

export default getByUserPostSchema; 