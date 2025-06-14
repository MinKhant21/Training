const bcrypt = require("bcrypt");
const saltRounds = 12;
const salt = bcrypt.genSaltSync(saltRounds);

const hashPassword = async (password) => {
  return await bcrypt.hashSync(password, salt);
};

module.exports = {
  hashPassword,
};
