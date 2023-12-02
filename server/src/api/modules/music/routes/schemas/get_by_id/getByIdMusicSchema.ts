import { RouteShorthandOptions } from 'fastify';
import baseSchema from '../../../../../shared/base/baseSchema';

const getByIdMusicSchema: RouteShorthandOptions = {
  schema: {
    params: {
      id: baseSchema.id,
    }
  }
}

export default getByIdMusicSchema; 