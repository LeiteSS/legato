import { RouteShorthandOptions } from 'fastify';
import Joi from 'joi';
import transcriptionSchema from '../transcriptionSchema';

const createTranscriptionSchema: RouteShorthandOptions = {
  schema: {
    body: Joi.object(transcriptionSchema),
  }
}

export default createTranscriptionSchema; 