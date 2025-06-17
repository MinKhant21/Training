const { Router } = require("express");

const userPermissonRoute = Router();
const {list,edit,createPermissionForRole} = require("./controllers/user-permission-controller")

userPermissonRoute.get("/user-permission/list",list);
userPermissonRoute.post("/user-permission/create/:id",createPermissionForRole);


module.exports = userPermissonRoute;