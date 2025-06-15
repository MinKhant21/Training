const { User } = require("../../../../models/index");
const { hashPassword, hashPassword } = require("../../../helpers/auth");
const { responseSuccess } = require("../../../helpers/response");


const edit = async (req, res, next) => {
  try {
    const { id } = req.params;
    let isExitUser = await User.findOne({
      where: {
        id: id,
      },
    });
    if (isExitUser === null) {
      throw new Error("Not Found");
    } else {
      responseSuccess(res, isExitUser, "User Get One");
    }
  } catch (error) {
    next(error);
  }
};
const list = async (req, res, next) => {
  try {
    let users = await User.findAll();
    responseSuccess(res, users, "User List");
  } catch (error) {
    next(error);
  }
};
const create = async (req, res, next) => {
  try {
    let isExitUser = await User.findOne({
      email: req.body.email,
    });

    if (isExitUser) {
      throw new Error("Duplicated Email");
    }

    let hashPassword = await hashPassword(req.body.password);
    hashPassword = req.body.password;

    let result = await User.create();
    if (!result) {
      throw new Error("Cannt Create User");
    }
    responseSuccess(res, result, "Created ");
  } catch (error) {
    next(error);
  }
};
const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { ...reqData } = req.body;
    let isExitUser = await User.findOne({
      where: {
        id: id,
      },
    });
    if (isExitUser === null) {
      throw new Error("Not Found");
    }
    await User.update(reqData, {
      where: {
        id: id,
      },
    });

    responseSuccess(res, [], "Updated ");
  } catch (error) {
    next(error);
  }
};
const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    await User.destroy({
      where: {
        id: id,
      },
    });
    responseSuccess(res, [], "Deleted");
  } catch (error) {
    next(error);
  }
};

module.exports = {
  list,
  create,
  update,
  edit,
  deleteUser
};
