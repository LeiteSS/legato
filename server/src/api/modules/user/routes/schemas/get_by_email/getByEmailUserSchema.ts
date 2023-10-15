import { RouteShorthandOptions } from 'fastify';
import Joi from 'joi';
import UserSchema from '../userSchema';

const getByEmailUserSchema: RouteShorthandOptions = {
  schema: {
    params: Joi.object({
      email: UserSchema.email,
    }),
  }
}

export default getByEmailUserSchema; 