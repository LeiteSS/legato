import { RouteShorthandOptions } from 'fastify';
import baseSchema from '../../../../../shared/base/baseSchema';
import Joi from 'joi';
import transcriptionSchema from '../transcriptionSchema';

const updateTranscriptionSchema: RouteShorthandOptions = {
  schema: {
    params: {
      id: baseSchema.id,
    },
    body: Joi.object(transcriptionSchema),
  }
}

export default updateTranscriptionSchema; 