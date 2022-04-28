'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FeaturedBusiness extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  FeaturedBusiness.init({
    user_id: DataTypes.INTEGER,
    country: DataTypes.INTEGER,
    country_id: DataTypes.INTEGER,
    membership_id: DataTypes.INTEGER,
    business_name: DataTypes.STRING,
    is_seen: DataTypes.INTEGER,
    about_business: DataTypes.STRING,
    categories: DataTypes.TEXT,
    banner: DataTypes.STRING,
    deletedAt: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'FeaturedBusiness',
  });
  return FeaturedBusiness;
};