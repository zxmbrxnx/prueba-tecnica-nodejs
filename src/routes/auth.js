import { Router } from 'express'
import AuthController from '../controllers/AuthController.js' // Controlador
import handleValidation from '../middlewares/handleValidation.js' // Middleware para validación
import loginSchema from '../validations/validarLogin.js' // Validaciones
// const auth = require('../middlewares/auth')
const router = Router()

/**
 * @swagger
 * tags:
 *  name: Auth
 *  description: Endpoints para autenticación
 */

/**
 * @swagger
 * /api/auth:
 *   post:
 *     summary: Iniciar sesión
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Login'
 *     responses:
 *       200:
 *         description: Usuario autenticado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       400:
 *         description: Datos inválidos
 *       401:
 *         description: Credenciales inválidas
 *       500:
 *         description: Error del servidor
 */

router.post('/', handleValidation(loginSchema), AuthController.login)

export default router
