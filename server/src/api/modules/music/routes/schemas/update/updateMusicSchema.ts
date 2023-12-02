import { RouteShorthandOptions } from 'fastify';
import baseSchema from '../../../../../shared/base/baseSchema';
import Joi from 'joi';
import musicSchema from '../musicSchema';

const updateMusicSchema: RouteShorthandOptions = {
  schema: {
    params: {
      id: baseSchema.id,
    },
    body: Joi.object(musicSchema),
  }
}

export default updateMusicSchema; 