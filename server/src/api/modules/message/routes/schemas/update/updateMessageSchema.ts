import { RouteShorthandOptions } from 'fastify';
import baseSchema from '../../../../../shared/base/baseSchema';
import Joi from 'joi';
import messageSchema from '../messageSchema';

const updateMessageSchema: RouteShorthandOptions = {
  schema: {
    params: {
      id: baseSchema.id,
    },
    body: Joi.object(messageSchema),
  }
}

export default updateMessageSchema; 