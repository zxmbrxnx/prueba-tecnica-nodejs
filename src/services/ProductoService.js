const productoRepo = require('../repositories/ProductoRepository')

class ProductoService {
  async getAllProductos () {
    return await productoRepo.findAll()
  }

  async createProducto (data) {
    return await productoRepo.create(data)
  }

  async getProductoById (id) {
    return await productoRepo.findById(id)
  }

  async updateProducto (id, data) {
    return await productoRepo.update(id, data)
  }

  async deleteProducto (id) {
    return await productoRepo.delete(id)
  }
}

module.exports = new ProductoService()
