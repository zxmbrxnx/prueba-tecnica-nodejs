import CategoriaRepository from '../repositories/CategoriaRepository.js'

class CategoriaService {
  async getAllCategorias () {
    return await CategoriaRepository.findAll()
  }

  async createCategoria (data) {
    return await CategoriaRepository.create(data)
  }

  async getCategoriaById (id) {
    return await CategoriaRepository.findById(id)
  }

  async updateCategoria (id, data) {
    return await CategoriaRepository.update(id, data)
  }

  async deleteCategoria (id) {
    return await CategoriaRepository.deleteCategoria(id)
  }
}

export default new CategoriaService()
