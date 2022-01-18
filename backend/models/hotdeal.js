'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HotDeal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  HotDeal.init({
    user_id: DataTypes.INTEGER,
    coupon_id: DataTypes.INTEGER,
    country: DataTypes.INTEGER,
    country_id: DataTypes.INTEGER,
    business_name: DataTypes.STRING,
    about_business: DataTypes.STRING,
    categories: DataTypes.TEXT,
    banner: DataTypes.STRING,
    discount: DataTypes.DECIMAL(10,2),
    start_date: DataTypes.STRING,
    end_date: DataTypes.STRING,
    deletedAt: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'HotDeal',
  });
  return HotDeal;
};