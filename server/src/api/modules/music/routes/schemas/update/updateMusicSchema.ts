import { RouteShorthandOptions } from 'fastify';
import baseSchema from '../../base';

const updateMusicSchema: RouteShorthandOptions = {
  schema: {
    params: {
      id: baseSchema.id,
    },
    body: MusicSchema,
  }
}

export default updateMusicSchema; 