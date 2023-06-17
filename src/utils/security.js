const bcrypt = require("bcrypt");

const verifyPassword = async (plainPassword, hashedPassword) => {
  const isPasswordValid = await bcrypt.compare(plainPassword, hashedPassword);
  return isPasswordValid;
};

module.exports = {
  verifyPassword,
};
