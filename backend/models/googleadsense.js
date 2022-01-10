'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GoogleAdsense extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  GoogleAdsense.init({
    user_id: DataTypes.INTEGER,
    publisher_id: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'GoogleAdsense',
  });
  return GoogleAdsense;
};