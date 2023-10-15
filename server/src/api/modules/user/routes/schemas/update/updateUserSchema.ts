import { RouteShorthandOptions } from 'fastify';
import Joi from 'joi';
import UserSchema from '../userSchema';
import baseSchema from '../../../../../shared/base/baseSchema';

const updateUserSchema: RouteShorthandOptions = {
  schema: {
    params: Joi.object({
      id: baseSchema.id,
    }),
    body: Joi.object(UserSchema),
  }
}

export default updateUserSchema; 