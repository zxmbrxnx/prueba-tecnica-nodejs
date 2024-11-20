const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET

module.exports = (req, res, next) => {
  const token = req.headers.authorization
  if (!token) return res.status(403).json({ message: 'Token requerido' })

  jwt.verify(token.split(' ')[1], secret, (err, user) => {
    if (err) return res.status(403).json({ message: 'Token inválido' })
    req.user = user
    next()
  })
}
