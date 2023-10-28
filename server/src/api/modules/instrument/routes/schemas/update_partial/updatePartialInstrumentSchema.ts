import { RouteShorthandOptions } from 'fastify';
import baseSchema from '../../base';

const updateInstrumentSchema: RouteShorthandOptions = {
  schema: {
    params: {
      id: baseSchema.id,
    },
    body: InstrumentSchema,
  }
}

export default updateInstrumentSchema; 