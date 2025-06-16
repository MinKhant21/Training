const { Router } = require("express");
const userRoute = require("./user-management/user.routes");
const customerRoute = require("./customer-management/customer.route");
const loginRoute = require("./login/login.routes");
const userPermissonRoute = require("./user-permission/user-permission-routes");


const PREFIX = "/api";
const router = Router();

// localhost:4000/api/user/list
router.use(PREFIX, userRoute);
router.use(PREFIX, customerRoute);
router.use(PREFIX, loginRoute);
router.use(PREFIX,userPermissonRoute);

module.exports = router;
