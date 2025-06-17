const { Module } = require("../../../../models/index");
const { SubModule } = require("../../../../models/index");
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

const edit = (req, res, next) => {
    try {
        res.send("hello");
    } catch (error) {
        next(error);
    }
}


module.exports = { list, edit };