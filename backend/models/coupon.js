'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Coupon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Coupon.belongsToMany(models.Category, {
        through: 'CouponCategory',
        as: 'category',
        foreignKey: 'coupon_id'
      });
      Coupon.belongsToMany(models.User, {
        through: 'CouponUser',
        as: 'user',
        foreignKey: 'coupon_id'
      });
    }
  };
  Coupon.init({
    name: DataTypes.STRING,
    code: DataTypes.STRING,
    type: DataTypes.STRING,
    discount: DataTypes.DECIMAL,
    total: DataTypes.DECIMAL,
    date_start: DataTypes.STRING,
    date_end: DataTypes.STRING,
    deletedAt: DataTypes.DATE,
    uses_total: DataTypes.INTEGER,
    status: DataTypes.TINYINT
  }, {
    sequelize,
    modelName: 'Coupon',
  });
  return Coupon;
};