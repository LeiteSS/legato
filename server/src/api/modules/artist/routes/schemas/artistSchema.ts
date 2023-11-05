import Joi from "joi";

const artistSchema = {

	name: Joi.string(),
	genre: Joi.string(),
	followers: Joi.array().items(Joi.string()),
	biography: Joi.string(),
}

export default artistSchema;