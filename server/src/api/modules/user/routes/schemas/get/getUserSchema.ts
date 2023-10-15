import { RouteShorthandOptions } from 'fastify';
import baseSchema from '../../../../../shared/base/baseSchema';
import Joi from 'joi';

const getByIdUserSchema: RouteShorthandOptions = {
  schema: {
    params: Joi.object({
      id: baseSchema.id,
    })
  }
}

export default getByIdUserSchema; 