'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Profile.init({
    user_id: DataTypes.INTEGER,
    business_name: DataTypes.STRING,
    business_email: DataTypes.STRING,
    manager_name: DataTypes.STRING,
    manager_email: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    fax: DataTypes.STRING,
    address: DataTypes.STRING,
    categories: DataTypes.STRING,
    website_link: DataTypes.STRING,
    facebook: DataTypes.STRING,
    instagram: DataTypes.STRING,
    youtube: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};