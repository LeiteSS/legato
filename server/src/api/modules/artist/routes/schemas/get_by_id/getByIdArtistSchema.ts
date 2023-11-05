import { RouteShorthandOptions } from 'fastify';
import baseSchema from '../../../../../shared/base/baseSchema';

const getByIdArtistSchema: RouteShorthandOptions = {
  schema: {
    params: {
      id: baseSchema.id,
    }
  }
}

export default getByIdArtistSchema; 