import { RouteShorthandOptions } from 'fastify';
import baseSchema from '../../base';

const getByIdInstrumentSchema: RouteShorthandOptions = {
  schema: {
    params: {
      id: baseSchema.id,
    }
  }
}

export default getByIdInstrumentSchema; 