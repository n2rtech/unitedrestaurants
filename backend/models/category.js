'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      Category.belongsTo(models.Category, {
        foreignKey: 'parent_id',
        as: 'parent_category'
      });

      Category.belongsTo(models.Category, {
        targetKey: 'parent_id',
        foreignKey: 'id',
        as: 'sub_category'
      });

    }
  };
  Category.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    parent_id: DataTypes.INTEGER,
    image: DataTypes.TEXT,
    sort_order: DataTypes.INTEGER,
    status: {
         type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: 0
      }
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};