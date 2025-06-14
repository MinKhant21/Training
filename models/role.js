"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**a
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Role.hasMany(models.User, {
        foreignKey: "role_id",
        as: "user",
      });
      Role.belongsToMany(models.Permission, {
  through: "RolePermission",
  foreignKey: "role_id",
  otherKey: "permission_id", // explicitly define otherKey
  as: "permissions",         // ✔️ more semantically correct
});
    }
  }
  Role.init(
    {
      role_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Role",
    }
  );
  return Role;
};
