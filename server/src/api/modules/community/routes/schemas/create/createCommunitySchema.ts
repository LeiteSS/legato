import { RouteShorthandOptions } from 'fastify';

const createCommunitySchema: RouteShorthandOptions = {
  schema: {
    body: CommunitySchema,
  }
}

export default createCommunitySchema; 