import { RouteShorthandOptions } from 'fastify';
import baseSchema from '../../base';

const getByInstrumentnameInstrumentSchema: RouteShorthandOptions = {
  schema: {
    params: {
      Instrumentname: InstrumentSchema.Instrumentname,
    }
  }
}

export default getByInstrumentnameInstrumentSchema; 