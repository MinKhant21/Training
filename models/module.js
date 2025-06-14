"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Module extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Module.hasMany(models.SubModule, {
        foreignKey: "sub_module_id",
        as: "sub_module",
      });
    }
  }
  Module.init(
    {
      module_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Module",
    }
  );
  return Module;
};
