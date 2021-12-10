'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vendor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Vendor.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    mobile: DataTypes.STRING,
    address: DataTypes.TEXT,
    password: DataTypes.STRING,
    country_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    country: DataTypes.STRING,
    department: DataTypes.STRING,
    subscription_plan: DataTypes.STRING,
    featured_business: DataTypes.INTEGER,
    hot_deal: DataTypes.INTEGER,
    business_dvertise: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    membership_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Vendor',
  });
  return Vendor;
};