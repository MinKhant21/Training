const { User } = require("../../../../models/index");
const { hashPassword } = require("../../../helpers/auth");

const list = (req, res, next) => {};
const create = async (req, res, next) => {
  try {
    let isExitUser = await User.findOne({
      email: req.body.email,
    });

    if (isExitUser) {
      throw new Error("Duplicated Email");
    }

    let hashString = await hashPassword(req.body.password);
    req.body.password = hashString;
    let result = await User.create(req.body);
    if (!result) {
      throw new Error("Cannt Create User");
    }
    res.json({
      status: 200,
      data: result,
      message: "Created User",
    });
  } catch (error) {
    next(error);
  }
};
const update = (req, res, next) => {};

module.exports = {
  list,
  create,
  update,
};
