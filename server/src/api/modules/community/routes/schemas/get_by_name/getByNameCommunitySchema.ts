import { RouteShorthandOptions } from 'fastify';
import baseSchema from '../../base';

const getByNameCommunitySchema: RouteShorthandOptions = {
  schema: {
    params: {
      Name: CommunitySchema.Name,
    }
  }
}

export default getByNameCommunitySchema; 