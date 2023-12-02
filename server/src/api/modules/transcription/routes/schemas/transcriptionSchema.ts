import Joi from "joi";

const transcriptionSchema = {
	titleMusic: Joi.string(),
	file: Joi.any(),
	genre: Joi.string(),
	difficult: Joi.string(),
	instrument: Joi.string(),
}

export default transcriptionSchema;