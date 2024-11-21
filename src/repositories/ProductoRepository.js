const { Producto, Categoria } = require('../../models')

class ProductoRepository {
  async findAll () {
    return await Producto.findAll({
      include: {
        model: Categoria,
        as: 'categoria',
        attributes: ['id', 'nombre']
      }
    })
  }

  async create (data) {
    return await Producto.create(data)
  }

  async findById (id) {
    return await Producto.findByPk(id)
  }

  async update (id, data) {
    return await Producto.update(data, { where: { id } })
  }

  async delete (id) {
    return await Producto.destroy({ where: { id } })
  }
}

module.exports = new ProductoRepository()
