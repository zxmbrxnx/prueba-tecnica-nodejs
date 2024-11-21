import jwt from 'jsonwebtoken'
import { compare } from 'bcrypt'
import UsuarioRepository from '../repositories/UsuarioRepository.js'

class AuthService {
  async login (email, password) {
    const usuario = await UsuarioRepository.findByEmail(email)
    if (!usuario) throw new Error('El usuario o la contraseña son incorrectos.')

    const passwordMatch = await compare(password, usuario.password)
    if (!passwordMatch) throw new Error('El usuario o la contraseña son incorrectos.')

    const token = jwt.sign(
      { id: usuario.id, email: usuario.email, rol: usuario.rol },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    )

    return { token, usuario: { id: usuario.id, email: usuario.email, rol: usuario.rol } }
  }
}

export default new AuthService()
