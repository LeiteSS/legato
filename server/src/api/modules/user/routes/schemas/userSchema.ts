import Joi from "joi";

const UserSchema = {
	name: Joi.string().required(),
	lastname: Joi.string().required(),
	password: Joi.string().required(),
	email: Joi.string().email().required(),
	accountType: Joi.string().required(),
	datebirth: Joi.date().required(),
}

export default UserSchema;