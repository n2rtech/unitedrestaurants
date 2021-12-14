'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MembershipTransaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  MembershipTransaction.init({
    user_id: DataTypes.INTEGER,
    type: DataTypes.STRING,
    start_date: DataTypes.STRING,
    end_date: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    membership_subscription_id: DataTypes.STRING,
    membership_id: DataTypes.INTEGER,
    comment: DataTypes.TEXT,
    interval: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MembershipTransaction',
  });
  return MembershipTransaction;
};