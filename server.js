/* eslint-disable import/first */
import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import swaggerUi from 'swagger-ui-express'
import swaggerSpec from './src/config/swagger.js'
import productoRoutes from './src/routes/productos.js'
import categoriaRoutes from './src/routes/categorias.js'
import authRoutes from './src/routes/auth.js'

const app = express()

// Middlewares globales
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(helmet())

// Rutas principales
app.use('/api/auth', authRoutes)
app.use('/api/categorias', categoriaRoutes)
app.use('/api/productos', productoRoutes)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

// Ruta para manejar errores 404
app.use((req, res, next) => {
  res.status(404).json({ message: 'Endpoint no encontrado' })
})

// Manejo de errores global
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ message: 'Error interno del servidor', error: err.message })
})

const PORT = process.env.PORT || 3000

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
