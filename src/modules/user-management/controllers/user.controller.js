const { User } = require("../../../../models/index");
const { hashPassword } = require("../../../helpers/auth");
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

    const email = req.body.email;
    let isExitUser = await User.findOne({
            where: {email},
            logging :false
        });

   
    


    if (isExitUser) {
      throw new Error("Duplicated Email");
      console.log(Object.keys(isExitUser.toJSON()));
    }

    let hashString = await hashPassword(req.body.password);
    hashString = req.body.password;

    let result = await User.create(req.body);
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
