import { RouteShorthandOptions } from 'fastify';
import baseSchema from '../../base';

const getByIdMessageSchema: RouteShorthandOptions = {
  schema: {
    params: {
      id: baseSchema.id,
    }
  }
}

export default getByIdMessageSchema; 