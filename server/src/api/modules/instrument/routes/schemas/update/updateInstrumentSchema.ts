import { RouteShorthandOptions } from 'fastify';
import baseSchema from '../../../../../shared/base/baseSchema';
import Joi from 'joi';
import instrumentSchema from '../instrumentSchema';

const updateInstrumentSchema: RouteShorthandOptions = {
  schema: {
    params: {
      id: baseSchema.id,
    },
    body: Joi.object(instrumentSchema),
  }
}

export default updateInstrumentSchema; 