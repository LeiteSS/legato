import { RouteShorthandOptions } from 'fastify';
import baseSchema from '../../../../../shared/base/baseSchema';

const deleteArtistSchema: RouteShorthandOptions = {
  schema: {
    params: {
      id: baseSchema.id,
    }
  }
}

export default deleteArtistSchema; 