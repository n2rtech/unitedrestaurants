'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasOne(models.Role, {
        foreignKey: 'id',
        as: 'role',
      });
      // define association here
    }
  };
  User.init({
    role_id: DataTypes.INTEGER,
    email: {
      type : DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    mobile: DataTypes.STRING,
    address: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};