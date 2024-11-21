import db from '../../models/index.js'

class CategoriaRepository {
  async findAll () {
    return await db.Categoria.findAll({
      include: {
        model: db.Producto,
        as: 'productos',
        attributes: ['id', 'nombre', 'precio', 'stock']
      }
    })
  }

  async create (data) {
    return await db.Categoria.create(data)
  }

  async findById (id) {
    return await db.Categoria.findByPk(id)
  }

  async update (id, data) {
    return await db.Categoria.update(data, { where: { id } })
  }

  async delete (id) {
    return await db.Categoria.destroy({ where: { id } })
  }
}

export default new CategoriaRepository()
