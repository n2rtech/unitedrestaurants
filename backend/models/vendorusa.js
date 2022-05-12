'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class VendorUsa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {

      VendorUsa.hasOne(models.SaleItem, {
        foreignKey: 'user_id',
        sourceKey : 'user_id',
        as:'sale_items',
      });

      VendorUsa.hasOne(models.MenuItem, {
        foreignKey: 'user_id',
        sourceKey : 'user_id',
        as:'menu_items',
      });      

      // define association here
    }
  };
  VendorUsa.init({
    user_id: DataTypes.INTEGER,
    business_name: DataTypes.STRING,
    about_business: DataTypes.TEXT('long'),
    business_email: DataTypes.STRING,
    manager_name: DataTypes.STRING,
    manager_email: DataTypes.STRING,
    owner_name: DataTypes.STRING,
    owner_email: DataTypes.STRING,
    ownermobile: DataTypes.STRING,
    phone: DataTypes.STRING,
    mobile: DataTypes.STRING,
    fax: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    post_code: DataTypes.STRING,
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING,
    categories: DataTypes.TEXT,
    banner: DataTypes.TEXT('long'),
    website_link: DataTypes.STRING,
    facebook: DataTypes.STRING,
    instagram: DataTypes.STRING,
    youtube: DataTypes.STRING,
    gallery: DataTypes.STRING,
    video: DataTypes.STRING,
    status: DataTypes.INTEGER,
    deletedAt: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'VendorUsa',
  },
  {
      indexes:[
       {
         unique: false,
         fields:['categories']
       }
      ]
    });
  return VendorUsa;
};