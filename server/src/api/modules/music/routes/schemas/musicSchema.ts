import Joi from "joi";

const MusicSchema = {

	title: Joi.string(),
	artist: Joi.string(),
	date: Joi.string(),
	album: Joi.string(),
}

export default MusicSchema;