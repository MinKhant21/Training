const { Module } = require("../../../../models/index");
const {SubModule} = require("../../../../models/index");
const { responseSuccess } = require("../../../helpers/response")

const list = async (req, res, next) => {
    try {

        console.log("Fetching modules...");
        //const modules = await Module.findAll({ attributes: ['id', 'module_name'] });
        // const subModules = await SubModule.findAll({ attributes: ['id', 'module_name'] });
        
        const modules = await Module.findAll({
            attributes: ['id', 'module_name'],
            include: [
                {
                    model: SubModule.unscoped(),
                    as: "SubModules"
                }
            ]
        });
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