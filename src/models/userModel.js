const UserSchema = require("../mongoSchemas/userSchema");
const encryptSHA = require("./encryptSHA");
const criptoBase64 = require("./criptoBase64");
const criptoBcrypt = require("./criptoBcrypt");

const cripto = new criptoBcrypt();

class UserModel {
  constructor({ username, fullName, password }) {
    this.username = username;
    this.fullName = fullName;
    this.password = password;
  }

  async register() {
    try {
      const newUserSchema = new UserSchema();
      newUserSchema.username = this.username;
      newUserSchema.fullName = this.fullName;
      newUserSchema.password = cripto.encrypt(this.password);
      console.log("newUserSchema.password", newUserSchema.password);

      await newUserSchema.save();
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = UserModel;
