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

      Category.belongsToMany(models.Coupon, {
        through: 'CouponCategory',
        as: 'categories',
        foreignKey: 'category_id'
      });

      Category.belongsToMany(models.Profile, {
        through: 'ProfileCategory',
        as: 'categoriess',
        foreignKey: 'category_id'
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
    paranoid: true,
    modelName: 'Category',
  });
  return Category;
};