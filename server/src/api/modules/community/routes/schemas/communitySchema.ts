import Joi from "joi";

const communitySchema = {
	name: Joi.string(),
	description: Joi.string(),
	rules: Joi.string(),
}

export default communitySchema;