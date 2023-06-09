import Joi from 'joi';

export const LoginSchema = Joi.object({
	username: Joi.string().min(8).max(30).required(),
	password: Joi.string().min(8).max(15).required(),
});

export const PostSchema = Joi.object({
	post_title: Joi.string().min(10).max(100).required(),
	post_body: Joi.string().required(),
	post_date: Joi.string().required(),
	post_time: Joi.string().required(),
	post_image: Joi.string().required(),
	post_type: Joi.string().required(),
	author_id: Joi.number().required(),
	post_count: Joi.number().required(),
	post_status: Joi.string().required(),
});
