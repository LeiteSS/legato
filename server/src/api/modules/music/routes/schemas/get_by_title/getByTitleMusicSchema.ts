import { RouteShorthandOptions } from 'fastify';
import baseSchema from '../../base';

const getByTitleMusicSchema: RouteShorthandOptions = {
  schema: {
    params: {
      Title: MusicSchema.Title,
    }
  }
}

export default getByTitleMusicSchema; 