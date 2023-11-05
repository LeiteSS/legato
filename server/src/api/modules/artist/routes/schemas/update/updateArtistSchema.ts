import { RouteShorthandOptions } from 'fastify';
import baseSchema from '../../../../../shared/base/baseSchema';
import artistSchema from '../artistSchema';
import Joi from 'joi';

const updateArtistSchema: RouteShorthandOptions = {
  schema: {
    params: {
      id: baseSchema.id,
    },
    body: Joi.object(artistSchema),
  }
}

export default updateArtistSchema; 