import { RouteShorthandOptions } from 'fastify';
import Joi from 'joi';
import musicSchema from '../musicSchema';

const createMusicSchema: RouteShorthandOptions = {
  schema: {
    body: Joi.object(musicSchema),
  }
}

export default createMusicSchema; 