const UserSchema = require("../mongoSchemas/userSchema");
const encryptSHA = require("./encryptSHA");
const criptoBase64 = require("./criptoBase64");
const criptoBcrypt = require("./criptoBcrypt");

const cripto = new criptoBcrypt();

class UserModel {
  constructor() {}

  async register({ username, fullName, password }) {
    try {
      const newUserSchema = new UserSchema();
      newUserSchema.username = username;
      newUserSchema.fullName = fullName;
      newUserSchema.password = cripto.encrypt(password);

      await newUserSchema.save();
    } catch (error) {
      console.error(error);
    }
  }

  async auth({ username, password }) {
    try {
      let user = await UserSchema.findOne({ username }).exec();

      if (user === null) {
        console.log("por falso");
        return false;
      }

      const checkPassword = await cripto.compare(password, user.password);
      console.log("checkPassword", checkPassword);
      return;
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = UserModel;
