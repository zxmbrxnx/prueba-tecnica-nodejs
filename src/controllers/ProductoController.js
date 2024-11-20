const productoService = require('../services/ProductoService')
const categoriaService = require('../services/CategoriaService')

class ProductoController {
  async getAll (req, res) {
    const productos = await productoService.getAllProductos()
    res.json(productos)
  }

  async create (req, res) {
    const categoria = await categoriaService.getCategoriaById(req.body.categoriaId)
    if (!categoria) {
      return res.status(400).json({ message: 'Categoría no encontrada' })
    }
    const nuevoProducto = await productoService.createProducto(req.body)
    res.status(201).json({ message: 'Producto creado', producto: nuevoProducto })
  }

  async getById (req, res) {
    const producto = await productoService.getProductoById(req.params.id)
    if (producto) {
      res.json(producto)
    } else {
      res.status(404).json({ message: 'Producto no encontrado' })
    }
  }

  async update (req, res) {
    const producto = await productoService.updateProducto(req.params.id, req.body)
    if (producto) {
      res.json({ message: 'Producto actualizado', producto })
    } else {
      res.status(404).json({ message: 'Producto no encontrado' })
    }
  }

  async delete (req, res) {
    const producto = await productoService.deleteProducto(req.params.id)
    if (producto) {
      res.json({ message: 'Producto eliminado' })
    } else {
      res.status(404).json({ message: 'Producto no encontrado' })
    }
  }
}

module.exports = new ProductoController()
