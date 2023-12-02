import { RouteShorthandOptions } from 'fastify';
import baseSchema from '../../../../../shared/base/baseSchema';
import Joi from 'joi';
import communitySchema from '../communitySchema';

const updateCommunitySchema: RouteShorthandOptions = {
  schema: {
    params: {
      id: baseSchema.id,
    },
    body: Joi.object(communitySchema),
  }
}

export default updateCommunitySchema; 