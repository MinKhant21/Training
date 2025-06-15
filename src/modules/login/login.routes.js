const { Router } = require("express");

const {login} = require("./controllers/login.controller");

const loginRoute = Router();

loginRoute.post("/login",login);

module.exports = loginRoute;