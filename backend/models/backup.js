'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Backup extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Backup.init({
    date_added: DataTypes.STRING,
  }, {
    sequelize,
    paranoid:true,
    modelName: 'Backup',
  });
  return Backup;
};