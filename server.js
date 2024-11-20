const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const helmet = require('helmet')

require('dotenv').config()

// Rutas
const productoRoutes = require('./src/routes/productos')
const categoriaRoutes = require('./src/routes/categorias')
const authRoutes = require('./src/routes/auth')
const swaggerUi = require('swagger-ui-express')
const swaggerSpec = require('./src/config/swagger')

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
  res
    .status(500)
    .json({ message: 'Error interno del servidor', error: err.message })
})

const PORT = process.env.PORT || 3000

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
