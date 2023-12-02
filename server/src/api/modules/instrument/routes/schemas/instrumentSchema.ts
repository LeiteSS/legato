import Joi from "joi";

const instrumentSchema = {
	instrumentType: Joi.string(),
	instrumentName: Joi.string(),
}

export default instrumentSchema;