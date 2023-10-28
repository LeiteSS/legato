import { RouteShorthandOptions } from 'fastify';
import baseSchema from '../../base';

const getByIdArtistSchema: RouteShorthandOptions = {
  schema: {
    params: {
      id: baseSchema.id,
    }
  }
}

export default getByIdArtistSchema; 