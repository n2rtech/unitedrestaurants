'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PaymentMethod extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  PaymentMethod.init({
    user_id: DataTypes.INTEGER,
    card_number: DataTypes.STRING,
    name_on_card: DataTypes.STRING,
    expiry_date: DataTypes.DATE,
    cvv: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PaymentMethod',
  });
  return PaymentMethod;
};