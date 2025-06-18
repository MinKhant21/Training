const { Module } = require("../../../../models/index");
const { SubModule } = require("../../../../models/index");
const { Permission } = require("../../../../models/index");
const { RolePermission } = require("../../../../models/index");
const { responseSuccess } = require("../../../helpers/response")
const { sequelize } = require("../../../../models/index");
const list = async (req, res, next) => {
  try {

    console.log("Fetching modules...");
    //const modules = await Module.findAll({ attributes: ['id', 'module_name'] });
    // const subModules = await SubModule.findAll({ attributes: ['id', 'module_name'] });

    // const modules = await Module.findAll({
    //     include: [
    //         {
    //             model: SubModule,
    //             as: 'SubModules', // match the alias used above
    //             attributes: ['id', 'sub_module_name']
    //         }
    //     ],
    //     attributes: ['id', 'module_name']
    // });

    const modules = await sequelize.query(`
      SELECT 
        m.id AS module_id,
        m.module_name,
        s.id AS sub_module_id,
        s.sub_module_name
      FROM 
        Modules m
      LEFT JOIN 
        SubModules s ON m.id = s.module_id
    `);


    console.log("Modules fetched:", modules);

    responseSuccess(res, modules, 'Module data');
    //responseSuccess(res,subModules,'Module data');

  } catch (error) {
    //console.error("Error in Module.findAll:", error);
    next(error);
  }
}

const createPermissionForRole = async (req, res, next) => {
  try {
    //role_id": 
    //"permission_detail
    //const { role_id,permission_detail } = req.body;
    const role_id = req.body.role_id;
    const permission_detail = req.body.permission_detail;
    console.log("Creating permission for role:", role_id, permission_detail);

    // Create Permission
    const permission = await Permission.create({
     //creaet: true,
  //deleet: false
      module_id: permission_detail.module_id,
      sub_module_id: permission_detail.sub_module_id,
      view: permission_detail.view,
      write: permission_detail.write,
      create: permission_detail.create,
      delete: permission_detail.delete
    });
    console.log("Permission created:");

    //  permission to role
    await RolePermission.create({
      role_id: role_id,
      permission_id: permission.id,
    });

    console.log("RolePermission created for role:");
    responseSuccess(res, 'Module data');

  } catch (error) {
    console.error("Error creating permission for role:", error);
    next(error);
  }
}

const edit = (req, res, next) => {
  try {
    res.send("hello");
  } catch (error) {
    next(error);
  }
}


module.exports = { list, edit, createPermissionForRole };