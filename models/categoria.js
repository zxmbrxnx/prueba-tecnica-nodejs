import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
  class Categoria extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      Categoria.hasMany(models.Producto, {
        foreignKey: 'categoriaId',
        as: 'productos'
      })
    }
  }
  Categoria.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Categoria'
  })
  return Categoria
}
