import { RouteShorthandOptions } from 'fastify';
import baseSchema from '../../../../../shared/base/baseSchema';
import Joi from 'joi';
import commentSchema from '../commentSchema';

const updateCommentSchema: RouteShorthandOptions = {
  schema: {
    params: {
      id: baseSchema.id,
    },
    body: Joi.object(commentSchema),
  }
}

export default updateCommentSchema; 