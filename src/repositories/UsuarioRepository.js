import db from '../../models/index.js'

class UsuarioRepository {
  async findByEmail (email) {
    return await db.Usuario.findOne({ where: { email } })
  }
}

export default new UsuarioRepository()
