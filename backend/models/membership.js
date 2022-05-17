'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Membership extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Membership.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    slug: DataTypes.STRING,
    interval: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    expired_on: DataTypes.DATE,
    create_time: DataTypes.TEXT,
    plan_type: DataTypes.STRING,
    plan_id: DataTypes.TEXT,
    product: DataTypes.TEXT,
    status: {
     type: DataTypes.BOOLEAN,
     allowNull: false,
     defaultValue: 0
   },
  }, {
    sequelize,
    modelName: 'Membership',
  });
  return Membership;
};