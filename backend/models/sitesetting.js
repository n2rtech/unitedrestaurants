'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SiteSetting extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  SiteSetting.init({
    maintenance_mode: DataTypes.STRING,
    site_name: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    address: DataTypes.TEXT,
    facebook_links: DataTypes.STRING,
    twitter_links: DataTypes.STRING,
    google_plus_links: DataTypes.STRING,
    linkedin_links: DataTypes.STRING,
    instagram_links: DataTypes.STRING,
    logo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SiteSetting',
  });
  return SiteSetting;
};