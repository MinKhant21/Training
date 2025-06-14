const {Customer} = require('../../../../models/index');
const { responseSuccess } = require("../../../helpers/response");

const list = async(req,res,next)=>{
    try{
        let data = await Customer.findAll();
        responseSuccess(res, data, "Customer List");
    }catch(error){
        next(error);
    }
}

const create = async(req,res,next)=>{
    try{
        let data = await Customer.create(req.body);
        responseSuccess(res, data, "Customer Created Successfully");
    }catch(error){
        next(error);
    }
}

const update = async(req,res,next)=>{
    try{
        let id = req.params.id;
        let {...reqData} = req.body;

        await Customer.update(reqData, {
            where: {id}
        });

        responseSuccess(res, reqData, "Updated Successfully");
    }catch(error){
        next(error);
    }
}

const edit = async(req,res,next)=>{
    try{
        let id = req.params.id;
        let data = await Customer.findOne({
            where: {id}
        });

        responseSuccess(res, data, "Data Found");
    }catch(error){
        next(error);
    }
}

const deleteCustomer = async(req,res,next)=>{
    try{
        let id = req.params.id;
        let data = await Customer.destroy({
            where: {id}
        });

        responseSuccess(res, data, "Data Found");
    }catch(error){
        next(error);
    }
}


module.exports = {
    list,
    create,
    update,
    edit,
    deleteCustomer
};