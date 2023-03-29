import Joi from "joi";

const AuthValidation = Joi.object().keys({
  email: Joi.string().email().min(3).max(40).required(),
  password: Joi.string().min(3).max(16).required(),
  name:Joi.string(),
  image:Joi.string(),
  profileType:Joi.string(),
  phoneNumber:Joi.number()
});

export default AuthValidation;
