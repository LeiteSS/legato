import { RouteShorthandOptions } from 'fastify';
import Joi from 'joi';
import commentSchema from '../commentSchema';

const createCommentSchema: RouteShorthandOptions = {
  schema: {
    body: Joi.object(commentSchema),
  }
}

export default createCommentSchema; 