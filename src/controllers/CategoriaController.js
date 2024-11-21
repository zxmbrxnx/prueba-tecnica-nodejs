import categoriaService from '../services/CategoriaService.js'

class CategoriaController {
  async getAll (req, res) {
    try {
      const categorias = await categoriaService.getAllCategorias()
      res.json(categorias)
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener categorías', error: error.message })
    }
  }

  async create (req, res) {
    try {
      const nuevaCategoria = await categoriaService.createCategoria(req.body)
      res.status(201).json({ message: 'Categoría creada', categoria: nuevaCategoria })
    } catch (error) {
      res.status(500).json({ message: 'Error al crear categoría', error: error.message })
    }
  }

  async getById (req, res) {
    try {
      const categoria = await categoriaService.getCategoriaById(req.params.id)
      if (categoria) {
        res.json(categoria)
      } else {
        res.status(404).json({ message: 'Categoría no encontrada' })
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener categoría', error: error.message })
    }
  }

  async update (req, res) {
    try {
      const categoria = await categoriaService.updateCategoria(req.params.id, req.body)
      if (categoria) {
        res.json({ message: 'Categoría actualizada', categoria })
      } else {
        res.status(404).json({ message: 'Categoría no encontrada' })
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar categoría', error: error.message })
    }
  }

  async delete (req, res) {
    try {
      const categoria = await categoriaService.deleteCategoria(req.params.id)
      if (categoria) {
        res.json({ message: 'Categoría eliminada' })
      } else {
        res.status(404).json({ message: 'Categoría no encontrada' })
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar categoría', error: error.message })
    }
  }
}

export default new CategoriaController()
