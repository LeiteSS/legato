import { RouteShorthandOptions } from 'fastify';
import Joi from 'joi';
import UserSchema from '../userSchema';

const getByIdUserSchema: RouteShorthandOptions = {
  schema: {
    body: Joi.array().items(Joi.object(UserSchema))
  }
}

export default getByIdUserSchema; 