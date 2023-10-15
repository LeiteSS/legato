import { RouteShorthandOptions } from 'fastify';
import Joi from 'joi';
import baseSchema from '../../../../../shared/base/baseSchema';

const getByIdUserSchema: RouteShorthandOptions = {
  schema: {
    params: Joi.object({
      id: baseSchema.id,
    })
  }
}

export default getByIdUserSchema; 