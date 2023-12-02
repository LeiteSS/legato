import { RouteShorthandOptions } from "fastify";
import Joi from "joi";

const authenticateUserSchema: RouteShorthandOptions = {
  schema: {
    body: Joi.object({
      email: Joi.string().email(),
      password: Joi.string(),
    })
  }
}