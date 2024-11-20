const categoriaRepo = require('../repositories/CategoriaRepository')

class CategoriaService {
  async getAllCategorias () {
    return await categoriaRepo.findAll()
  }

  async createCategoria (data) {
    return await categoriaRepo.create(data)
  }

  async getCategoriaById (id) {
    return await categoriaRepo.findById(id)
  }

  async updateCategoria (id, data) {
    return await categoriaRepo.update(id, data)
  }

  async deleteCategoria (id) {
    return await categoriaRepo.delete(id)
  }
}

module.exports = new CategoriaService()
