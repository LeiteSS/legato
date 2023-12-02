import Joi from "joi";

const messageSchema = {
	destination: Joi.string(),
	source: Joi.string(),
	content: Joi.string(),
}

export default messageSchema;