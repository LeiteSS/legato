import { RouteShorthandOptions } from 'fastify';
import baseSchema from '../../base';

const getByIdPostSchema: RouteShorthandOptions = {
  schema: {
    params: {
      id: baseSchema.id,
    }
  }
}

export default getByIdPostSchema; 