class Producto {
  constructor ({ id, nombre, precio, stock, categoriaId }) {
    this.id = id
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
    this.categoriaId = categoriaId
  }
}

module.exports = Producto
