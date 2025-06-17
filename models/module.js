"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {

  class Module extends Model {
    static associate(models) {


      Module.hasMany(models.SubModule, {
        foreignKey: 'module_id',
        as: 'SubModules'
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
