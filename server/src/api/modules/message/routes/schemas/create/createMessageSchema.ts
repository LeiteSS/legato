import { RouteShorthandOptions } from 'fastify';

const createMessageSchema: RouteShorthandOptions = {
  schema: {
    body: MessageSchema,
  }
}

export default createMessageSchema; 