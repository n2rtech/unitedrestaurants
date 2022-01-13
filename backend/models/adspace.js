'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AdSpace extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  AdSpace.init({
    user_id: DataTypes.INTEGER,
    add_membership_id: DataTypes.INTEGER,
    categories: DataTypes.STRING,
    country_code: DataTypes.STRING,
    link: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AdSpace',
  });
  return AdSpace;
};