import Joi from "joi";

const UserSchema = {
	name: Joi.string().required(),
	password: Joi.string().required(),
	email: Joi.string().email().required(),
	accountType: Joi.string().required(),
	datebirth: Joi.date(),
}

export default UserSchema;