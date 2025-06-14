const { Router } = require("express");

const { list,
    create,
    update,
    edit,
    deleteCustomer } = require("./controllers/customer.controller");

const customerRoute = Router();

customerRoute.get("/customer-managemenent/list",list);
customerRoute.post("/customer-management/create",create);
customerRoute.get("/customer-management/edit/:id",edit);
customerRoute.patch("/customer-management/update/:id",update);
customerRoute.delete("/customer-management/delete/:id",deleteCustomer);

module.exports = customerRoute;