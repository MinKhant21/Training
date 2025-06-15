"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Permission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Permission.belongsToMany(models.Role, {
        through: "RolePermission",
        foreignKey: "permission_id",
        as: "permission",
      });
      Permission.hasMany(models.Role, {
        foreignKey: "role_id",
        as: "role",
      });

      Permission.hasMany(models.Module, {
        foreignKey: "module_id",
        as: "module",
      });
      Permission.hasMany(models.SubModule, {
        foreignKey: "sub_module_id",
        as: "sub_module",
      });
    }
  }
  Permission.init(
    {
      role_id: DataTypes.INTEGER,
      module_id: DataTypes.INTEGER,
      sub_module_id: DataTypes.INTEGER,
      view: DataTypes.BOOLEAN,
      write: DataTypes.BOOLEAN,
      create: DataTypes.BOOLEAN,
      delete: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Permission",
    }
  );
  return Permission;
};
