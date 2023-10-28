import { RouteShorthandOptions } from 'fastify';

const createArtistSchema: RouteShorthandOptions = {
  schema: {
    body: ArtistSchema,
  }
}

export default createArtistSchema; 