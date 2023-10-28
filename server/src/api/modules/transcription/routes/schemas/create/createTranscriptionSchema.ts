import { RouteShorthandOptions } from 'fastify';

const createTranscriptionSchema: RouteShorthandOptions = {
  schema: {
    body: TranscriptionSchema,
  }
}

export default createTranscriptionSchema; 