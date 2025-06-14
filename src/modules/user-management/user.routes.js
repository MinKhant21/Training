const { Router } = require("express");
const { list, create, update } = require("./controllers/user.controller");

const userRoute = Router();

userRoute.get("/user-management/list", list);
userRoute.post("/user-management/create", create);

module.exports = userRoute;
