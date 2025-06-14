const bcrypt = require("bcrypt");
const saltRounds = 12;
const salt = bcrypt.genSaltSync(saltRounds);

const hashPassword = async (password) => {
  return await bcrypt.hashSync(password, salt);
};

const comparePassword = async (password,hashPassword) => {
  return await bcrypt.compare(password,hashPassword);
};

module.exports = {
  hashPassword,comparePassword
};
