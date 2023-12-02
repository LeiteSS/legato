import { RouteShorthandOptions } from 'fastify';
import Joi from 'joi';
import messageSchema from '../messageSchema';

const createMessageSchema: RouteShorthandOptions = {
  schema: {
    body: Joi.object(messageSchema),
  }
}

export default createMessageSchema; 