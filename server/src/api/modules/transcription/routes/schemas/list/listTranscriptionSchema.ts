import { RouteShorthandOptions } from 'fastify';
import baseSchema from '../../base';

const getByIdTranscriptionSchema: RouteShorthandOptions = {
  schema: {
    params: {
      id: baseSchema.id,
    }
  }
}

export default getByIdTranscriptionSchema; 