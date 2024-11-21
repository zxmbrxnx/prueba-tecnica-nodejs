import Joi from 'joi'

// Esquema de validación para Producto
export const categorySchemaCreate = Joi.object({
  nombre: Joi.string()
    .min(1) // El nombre debe tener al menos 1 carácter
    .required()
    .messages({
      'string.empty': 'El campo "nombre" no puede estar vacío.',
      'any.required': 'El campo "nombre" es obligatorio.'
    })
})

export const categorySchemaUpdate = Joi.object({
  nombre: Joi.string()
    .min(1) // El nombre debe tener al menos 1 carácter
    .messages({
      'string.empty': 'El campo "nombre" no puede estar vacío.'
    })
})
