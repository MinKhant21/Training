const { Router } = require("express");
const userRoute = require("./user-management/user.routes");

const PREFIX = "/api";
const router = Router();

// localhost:4000/api/user/list
router.use(PREFIX, userRoute);

module.exports = router;
