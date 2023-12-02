import { RouteShorthandOptions } from 'fastify';
import Joi from 'joi';
import instrumentSchema from '../instrumentSchema';

const createInstrumentSchema: RouteShorthandOptions = {
  schema: {
    body: Joi.object(instrumentSchema),
  }
}

export default createInstrumentSchema; 