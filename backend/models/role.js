'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Role.belongsTo(models.User, {
        foreignKey: 'role_id',
        as: 'user'
      });
      Role.belongsToMany(models.Permission, {
        through: 'RolePermission',
        as: 'permissions',
        foreignKey: 'role_id'
      });
      // define association here
    }
  };
  Role.init({
     role_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    role_description:  {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Role',
  });
  return Role;
};