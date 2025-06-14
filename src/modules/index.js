const { Router } = require("express");
const userRoute = require("./user-management/user.routes");
const customerRoute = require("./customer-management/customer.route");

const PREFIX = "/api";
const router = Router();

// localhost:4000/api/user/list
router.use(PREFIX, userRoute);
router.use(PREFIX, customerRoute);

module.exports = router;
