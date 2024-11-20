const categoriaService = require('../services/CategoriaService')

class CategoriaController {
  async getAll (req, res) {
    const categorias = await categoriaService.getAllCategorias()
    res.json(categorias)
  }

  async create (req, res) {
    const nuevoProducto = await categoriaService.createCategoria(req.body)
    res.status(201).json({ message: 'Producto creado', categoria: nuevoProducto })
  }

  async getById (req, res) {
    const categoria = await categoriaService.getCategoriaById(req.params.id)
    if (categoria) {
      res.json(categoria)
    } else {
      res.status(404).json({ message: 'Producto no encontrado' })
    }
  }

  async update (req, res) {
    const categoria = await categoriaService.updateCategoria(req.params.id, req.body)
    if (categoria) {
      res.json({ message: 'Producto actualizado', categoria })
    } else {
      res.status(404).json({ message: 'Producto no encontrado' })
    }
  }

  async delete (req, res) {
    const categoria = await categoriaService.deleteCategoria(req.params.id)
    if (categoria) {
      res.json({ message: 'Producto eliminado' })
    } else {
      res.status(404).json({ message: 'Producto no encontrado' })
    }
  }
}

module.exports = new CategoriaController()
