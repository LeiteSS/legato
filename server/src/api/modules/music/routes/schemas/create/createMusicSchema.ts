import { RouteShorthandOptions } from 'fastify';

const createMusicSchema: RouteShorthandOptions = {
  schema: {
    body: MusicSchema,
  }
}

export default createMusicSchema; 