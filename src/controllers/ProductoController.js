const productoService = require('../services/ProductoService')

class ProductoController {
  async getAll (req, res) {
    try {
      const productos = await productoService.getAllProductos()
      res.json(productos)
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener productos', error: error.message })
    }
  }

  async getById (req, res) {
    try {
      const producto = await productoService.getProductoById(req.params.id)
      if (producto) {
        res.json(producto)
      } else {
        res.status(404).json({ message: 'Producto no encontrado' })
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener producto', error: error.message })
    }
  }

  async create (req, res) {
    try {
      const nuevoProducto = await productoService.createProducto(req.body)
      res.status(201).json({ message: 'Producto creado', producto: nuevoProducto })
    } catch (error) {
      res.status(500).json({ message: 'Error al crear producto', error: error.message })
    }
  }

  async update (req, res) {
    try {
      const producto = await productoService.updateProducto(req.params.id, req.body)
      if (producto) {
        res.json({ message: 'Producto actualizado', producto })
      } else {
        res.status(404).json({ message: 'Producto no encontrado' })
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar producto', error: error.message })
    }
  }

  async delete (req, res) {
    try {
      const producto = await productoService.deleteProducto(req.params.id)
      if (producto) {
        res.json({ message: 'Producto eliminado' })
      } else {
        res.status(404).json({ message: 'Producto no encontrado' })
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar producto', error: error.message })
    }
  }
}

module.exports = new ProductoController()
