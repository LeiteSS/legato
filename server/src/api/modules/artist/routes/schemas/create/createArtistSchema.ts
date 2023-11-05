import { RouteShorthandOptions } from 'fastify';
import artistSchema from '../artistSchema';
import Joi from 'joi';

const createArtistSchema: RouteShorthandOptions = {
  schema: {
    body: Joi.object(artistSchema),
  }
}

export default createArtistSchema; 