'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LatestAddition extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  LatestAddition.init({
    user_id: DataTypes.INTEGER,
    country: DataTypes.INTEGER,
    country_id: DataTypes.INTEGER,
    business_name: DataTypes.STRING,
    about_business: DataTypes.STRING,
    categories: DataTypes.TEXT,
    banner: DataTypes.STRING,
    deletedAt: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'LatestAddition',
  });
  return LatestAddition;
};