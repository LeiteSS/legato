import { RouteShorthandOptions } from 'fastify';
import baseSchema from '../../base';

const getByDestinationMessageSchema: RouteShorthandOptions = {
  schema: {
    params: {
      Destination: MessageSchema.Destination,
    }
  }
}

export default getByDestinationMessageSchema; 