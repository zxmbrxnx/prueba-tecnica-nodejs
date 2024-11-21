import swaggerJSDoc from 'swagger-jsdoc'

const swaggerDefinition = {
  openapi: '3.0.0', // Especificación OpenAPI
  info: {
    title: 'API de Inventario', // Título de la API
    version: '1.0.0', // Versión de la API
    description: 'Documentación de la API para el sistema de inventario'
  },
  servers: [
    {
      url: 'http://localhost:3000', // URL base de la API
      description: 'Servidor de desarrollo'
    }
  ],
  components: {
    schemas: {
      Product: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            description: 'ID único del producto'
          },
          nombre: {
            type: 'string',
            description: 'Nombre del producto'
          },
          precio: {
            type: 'number',
            description: 'Precio del producto'
          },
          stock: {
            type: 'integer',
            description: 'Cantidad de stock disponible'
          },
          categoriaId: {
            type: 'integer',
            description: 'ID de la categoría asociada'
          }
        },
        required: ['nombre', 'precio', 'stock', 'categoriaId'] // Campos requeridos
      },
      Category: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            description: 'ID único de la categoría'
          },
          nombre: {
            type: 'string',
            description: 'Nombre de la categoría'
          }
        },
        required: ['nombre'] // Campos requeridos
      },
      Login: {
        type: 'object',
        properties: {
          email: {
            type: 'string',
            description: 'Correo electrónico del usuario'
          },
          password: {
            type: 'string',
            description: 'Contraseña del usuario'
          }
        },
        required: ['email', 'password'] // Campos requeridos
      }
    },
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT'
      }
    }
  },
  security: [
    {
      bearerAuth: []
    }
  ]
}

const options = {
  swaggerDefinition,
  apis: ['./src/routes/*.js'] // Rutas donde tienes documentados los endpoints
}

const swaggerSpec = swaggerJSDoc(options)

export default swaggerSpec
