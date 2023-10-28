import { RouteShorthandOptions } from 'fastify';
import baseSchema from '../../base';

const getByTitlemusicTranscriptionSchema: RouteShorthandOptions = {
  schema: {
    params: {
      Titlemusic: TranscriptionSchema.Titlemusic,
    }
  }
}

export default getByTitlemusicTranscriptionSchema; 