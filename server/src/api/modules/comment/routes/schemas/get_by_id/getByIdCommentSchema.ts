import { RouteShorthandOptions } from 'fastify';
import baseSchema from '../../../../../shared/base/baseSchema';

const getByIdCommentSchema: RouteShorthandOptions = {
  schema: {
    params: {
      id: baseSchema.id,
    }
  }
}

export default getByIdCommentSchema; 