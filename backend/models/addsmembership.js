'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AddsMembership extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  AddsMembership.init({
    user_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    slug: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    interval: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AddsMembership',
  });
  return AddsMembership;
};