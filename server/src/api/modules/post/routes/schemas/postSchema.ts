import Joi from "joi";

const postSchema = {

	caption: Joi.string(),
	file: Joi.any(),
	comment: Joi.array(),
	likes: Joi.number(),
	reaction: Joi.array().items(Joi.string())
}

export default postSchema;