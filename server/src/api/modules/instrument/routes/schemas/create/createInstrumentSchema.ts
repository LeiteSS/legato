import { RouteShorthandOptions } from 'fastify';

const createInstrumentSchema: RouteShorthandOptions = {
  schema: {
    body: InstrumentSchema,
  }
}

export default createInstrumentSchema; 