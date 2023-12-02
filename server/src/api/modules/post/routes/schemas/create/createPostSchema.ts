import { RouteShorthandOptions } from 'fastify';
import Joi from 'joi';
import postSchema from '../postSchema';

const createPostSchema: RouteShorthandOptions = {
  schema: {
    body: Joi.object(postSchema),
  }
}

export default createPostSchema; 