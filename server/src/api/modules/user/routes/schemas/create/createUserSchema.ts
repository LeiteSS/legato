import { RouteShorthandOptions } from 'fastify';
import Joi from 'joi';
import UserSchema from '../userSchema';

const createUserSchema: RouteShorthandOptions = {
  schema: {
    body: Joi.object(UserSchema),
  }
}

export default createUserSchema; 