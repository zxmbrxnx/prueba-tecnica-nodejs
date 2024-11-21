import ProductoRepository from '../repositories/ProductoRepository.js'

class ProductoService {
  async getAllProductos () {
    return await ProductoRepository.findAll()
  }

  async createProducto (data) {
    return await ProductoRepository.create(data)
  }

  async getProductoById (id) {
    return await ProductoRepository.findById(id)
  }

  async updateProducto (id, data) {
    return await ProductoRepository.update(id, data)
  }

  async deleteProducto (id) {
    return await ProductoRepository.deleteProducto(id)
  }
}

export default new ProductoService()
