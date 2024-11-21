import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const secret = process.env.JWT_SECRET

export default (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(403).json({ message: 'Token requerido' })
  }

  const token = authHeader.split(' ')[1]

  if (!token) {
    return res.status(403).json({ message: 'Token inválido' })
  }

  jwt.verify(token, secret, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Token inválido' })
    }
    req.user = user
    next()
  })
}
