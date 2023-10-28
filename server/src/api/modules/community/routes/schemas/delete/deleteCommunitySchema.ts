import { RouteShorthandOptions } from 'fastify';
import baseSchema from '../../base';

const getByIdCommunitySchema: RouteShorthandOptions = {
  schema: {
    params: {
      id: baseSchema.id,
    }
  }
}

export default getByIdCommunitySchema; 