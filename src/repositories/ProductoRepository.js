import db from '../../models/index.js'

class ProductoRepository {
  async findAll () {
    return await db.Producto.findAll({
      include: {
        model: db.Categoria,
        as: 'categoria',
        attributes: ['id', 'nombre']
      }
    })
  }

  async create (data) {
    return await db.Producto.create(data)
  }

  async findById (id) {
    return await db.Producto.findByPk(id)
  }

  async update (id, data) {
    return await db.Producto.update(data, { where: { id } })
  }

  async delete (id) {
    return await db.Producto.destroy({ where: { id } })
  }
}

export default new ProductoRepository()
