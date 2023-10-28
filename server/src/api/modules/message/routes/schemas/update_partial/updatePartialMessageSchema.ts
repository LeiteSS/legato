import { RouteShorthandOptions } from 'fastify';
import baseSchema from '../../base';

const updateMessageSchema: RouteShorthandOptions = {
  schema: {
    params: {
      id: baseSchema.id,
    },
    body: MessageSchema,
  }
}

export default updateMessageSchema; 