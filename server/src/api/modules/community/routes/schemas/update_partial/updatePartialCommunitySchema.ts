import { RouteShorthandOptions } from 'fastify';
import baseSchema from '../../base';

const updateCommunitySchema: RouteShorthandOptions = {
  schema: {
    params: {
      id: baseSchema.id,
    },
    body: CommunitySchema,
  }
}

export default updateCommunitySchema; 