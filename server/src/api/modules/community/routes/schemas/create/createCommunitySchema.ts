import { RouteShorthandOptions } from 'fastify';
import Joi from 'joi';
import communitySchema from '../communitySchema';

const createCommunitySchema: RouteShorthandOptions = {
  schema: {
    body: Joi.object(communitySchema),
  }
}

export default createCommunitySchema; 