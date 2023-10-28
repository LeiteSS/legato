import { RouteShorthandOptions } from 'fastify';
import baseSchema from '../../base';

const getByIdCommentSchema: RouteShorthandOptions = {
  schema: {
    params: {
      id: baseSchema.id,
    }
  }
}

export default getByIdCommentSchema; 