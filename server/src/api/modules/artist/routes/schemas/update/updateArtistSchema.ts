import { RouteShorthandOptions } from 'fastify';
import baseSchema from '../../base';

const updateArtistSchema: RouteShorthandOptions = {
  schema: {
    params: {
      id: baseSchema.id,
    },
    body: ArtistSchema,
  }
}

export default updateArtistSchema; 