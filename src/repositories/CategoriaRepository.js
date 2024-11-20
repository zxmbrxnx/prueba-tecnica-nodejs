const { Categoria } = require('../../models')

class CategoriaRepository {
  async findAll () {
    return await Categoria.findAll()
  }

  async create (data) {
    return await Categoria.create(data)
  }

  async findById (id) {
    return await Categoria.findByPk(id)
  }

  async update (id, data) {
    return await Categoria.update(data, { where: { id } })
  }

  async delete (id) {
    return await Categoria.destroy({ where: { id } })
  }
}

module.exports = new CategoriaRepository()
