const { Usuario } = require('../../models') // Modelo Sequelize

class UsuarioRepository {
  async findByEmail (email) {
    return await Usuario.findOne({ where: { email } })
  }
}

module.exports = new UsuarioRepository()
