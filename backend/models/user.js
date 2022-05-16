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


      User.hasOne(models.Category, {
        foreignKey: 'id',
        as: 'category',
      });

      User.belongsToMany(models.Coupon, {
        through: 'CouponUser',
        as: 'user',
        foreignKey: 'user_id'
      });
      // define association here
    }
  };
  User.init({
    id: DataTypes.INTEGER,
    role_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    email: {
      type : DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    country_id: DataTypes.INTEGER,
    phone: DataTypes.STRING,
    mobile: DataTypes.STRING,
    address: DataTypes.TEXT
  }, {
    sequelize,
    paranoid: true,
    modelName: 'User',
  });
  return User;
};