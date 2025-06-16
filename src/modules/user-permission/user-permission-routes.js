const { Router } = require("express");

const userPermissonRoute = Router();
const {list,edit} = require("./controllers/user-permission-controller")

userPermissonRoute.get("/user-permission/list",list);
userPermissonRoute.get("/user-permission/edit/:id",edit);


module.exports = userPermissonRoute;