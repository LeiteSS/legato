import Joi from "joi";

const commentSchema = {
	user: Joi.string(),
	content: Joi.string(),
	replies: Joi.array().items(Joi.string())
}

export default commentSchema;