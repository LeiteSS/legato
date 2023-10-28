import { RouteShorthandOptions } from 'fastify';
import baseSchema from '../../base';

const getByNameArtistSchema: RouteShorthandOptions = {
  schema: {
    params: {
      Name: ArtistSchema.Name,
    }
  }
}

export default getByNameArtistSchema; 