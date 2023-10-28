import { RouteShorthandOptions } from 'fastify';
import baseSchema from '../../base';

const updateTranscriptionSchema: RouteShorthandOptions = {
  schema: {
    params: {
      id: baseSchema.id,
    },
    body: TranscriptionSchema,
  }
}

export default updateTranscriptionSchema; 