'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Paypalsettings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Paypalsettings.init({
    mode: DataTypes.INTEGER,
    testclient_id: DataTypes.TEXT,
    testsecret: DataTypes.TEXT,
    liveclient_id: DataTypes.TEXT,
    livesecret: DataTypes.TEXT,

  }, {
    sequelize,
    modelName: 'Paypalsettings',
  });
  return Paypalsettings;
};