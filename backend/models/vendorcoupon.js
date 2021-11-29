'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class VendorCoupon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  VendorCoupon.init({
    user_id: DataTypes.INTEGER,
    deal_name: DataTypes.STRING,
    deal_description: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'VendorCoupon',
  });
  return VendorCoupon;
};