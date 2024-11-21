import Joi from 'joi'

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(4).required()
})

export default loginSchema
