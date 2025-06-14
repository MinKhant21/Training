const { Router } = require("express");
const { list, create, update } = require("./controllers/user.controller");

const userRoute = Router();

userRoute.get("/", list);

module.exports = userRoute;
