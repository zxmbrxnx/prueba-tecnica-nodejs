import Joi from 'joi'

// Esquema de validación para Producto
export const productSchemaCreate = Joi.object({
  nombre: Joi.string()
    .min(1) // El nombre debe tener al menos 1 carácter
    .required()
    .messages({
      'string.empty': 'El campo "nombre" no puede estar vacío.',
      'any.required': 'El campo "nombre" es obligatorio.'
    }),

  precio: Joi.number()
    .positive() // Debe ser un número positivo
    .required()
    .messages({
      'number.base': 'El campo "precio" debe ser un número.',
      'number.positive': 'El campo "precio" debe ser mayor a 0.',
      'any.required': 'El campo "precio" es obligatorio.'
    }),

  stock: Joi.number()
    .integer() // Debe ser un número entero
    .min(0) // Mínimo permitido: 0
    .required()
    .messages({
      'number.base': 'El campo "stock" debe ser un número entero.',
      'number.min': 'El campo "stock" no puede ser menor que 0.',
      'any.required': 'El campo "stock" es obligatorio.'
    }),

  categoriaId: Joi.number()
    .integer() // Debe ser un número entero
    .required()
    .messages({
      'number.base': 'El campo "categoriaId" debe ser un número entero.',
      'any.required': 'El campo "categoriaId" es obligatorio.'
    })
})

export const productSchemaUpdate = Joi.object({
  nombre: Joi.string()
    .min(1) // El nombre debe tener al menos 1 carácter
    .messages({
      'string.empty': 'El campo "nombre" no puede estar vacío.'
    }),

  precio: Joi.number()
    .positive() // Debe ser un número positivo
    .messages({
      'number.base': 'El campo "precio" debe ser un número.',
      'number.positive': 'El campo "precio" debe ser mayor a 0.'
    }),

  stock: Joi.number()
    .integer() // Debe ser un número entero
    .min(0) // Mínimo permitido: 0
    .messages({
      'number.base': 'El campo "stock" debe ser un número entero.',
      'number.min': 'El campo "stock" no puede ser menor que 0.'
    }),

  categoriaId: Joi.number()
    .integer() // Debe ser un número entero
    .messages({
      'number.base': 'El campo "categoriaId" debe ser un número entero.'
    })
})
