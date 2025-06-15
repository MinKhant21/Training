const { Router } = require("express");
const {
  list,
  create,
  update,
  edit,
  deleteUser
} = require("./controllers/user.controller");



const userRoute = Router();

userRoute.get("/user-management/list", list);
userRoute.get("/user-management/edit/:id", edit);
userRoute.post("/user-management/create", create);
userRoute.patch("/user-management/update/:id", update);
userRoute.delete("/user-management/delete/:id", deleteUser);

module.exports = userRoute;
