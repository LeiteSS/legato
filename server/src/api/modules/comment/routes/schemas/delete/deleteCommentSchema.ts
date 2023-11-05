import { RouteShorthandOptions } from 'fastify';
import baseSchema from '../../../../../shared/base/baseSchema';

const deleteCommentSchema: RouteShorthandOptions = {
  schema: {
    params: {
      id: baseSchema.id,
    }
  }
}

export default deleteCommentSchema; 