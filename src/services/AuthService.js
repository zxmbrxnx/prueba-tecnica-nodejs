const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const UsuarioRepository = require('../repositories/UsuarioRepository')

class AuthService {
  async login (email, password) {
    const usuario = await UsuarioRepository.findByEmail(email)
    if (!usuario) throw new Error('El usuario o la contraseña son incorrectos.')

    const passwordMatch = await bcrypt.compare(password, usuario.password)
    if (!passwordMatch) throw new Error('El usuario o la contraseña son incorrectos.')

    const token = jwt.sign(
      { id: usuario.id, email: usuario.email, rol: usuario.rol },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    )

    return { token, usuario: { id: usuario.id, email: usuario.email, rol: usuario.rol } }
  }
}

module.exports = new AuthService()
