import { RouteShorthandOptions } from 'fastify';
import baseSchema from '../../base';

const getByIdMusicSchema: RouteShorthandOptions = {
  schema: {
    params: {
      id: baseSchema.id,
    }
  }
}

export default getByIdMusicSchema; 