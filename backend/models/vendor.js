'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vendor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Vendor.hasMany(models.FeaturedBusiness, {as: 'featured',foreignKey: 'user_id'});
      Vendor.hasMany(models.HotDeal, {as: 'hot_deals',foreignKey: 'user_id'});
      // define association here
    }
  };
  Vendor.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    mobile: DataTypes.STRING,
    ownermobile: DataTypes.STRING,
    address: DataTypes.TEXT,
    password: DataTypes.STRING,
    country_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    country: DataTypes.STRING,
    department: DataTypes.STRING,
    wallet_balance: DataTypes.DOUBLE,
    subscription_plan: DataTypes.STRING,
    featured_business: DataTypes.INTEGER,
    hot_deal: DataTypes.INTEGER,
    business_dvertise: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    membership_id: DataTypes.INTEGER,
    is_suspended: DataTypes.INTEGER,
    banner: DataTypes.TEXT('long'),
    membership_start_date: DataTypes.DATE,
    membership_end_date: DataTypes.DATE,
    adds_membership_id: DataTypes.INTEGER,
    adds_membership_start_date: DataTypes.DATE,
    adds_membership_end_date: DataTypes.DATE
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Vendor',
  });
  return Vendor;
};