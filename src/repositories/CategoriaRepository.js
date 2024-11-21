const { Categoria, Producto } = require('../../models')

class CategoriaRepository {
  async findAll () {
    return await Categoria.findAll({
      include: {
        model: Producto,
        as: 'productos',
        attributes: ['id', 'nombre', 'precio', 'stock']
      }
    })
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
