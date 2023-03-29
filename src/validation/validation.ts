import Joi from "joi";

const person = Joi.object().keys({
  name: Joi.string().min(3).max(40).required(),
  email: Joi.number().integer().min(16),
});

export default person;
