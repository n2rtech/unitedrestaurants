'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Youtubevideo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Youtubevideo.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT('long'),
    video_link: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    youtube_video_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Youtubevideo',
  });
  return Youtubevideo;
};