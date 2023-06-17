const UserSchema = require("../mongoSchemas/userSchema");
const encryptSHA = require("./encryptSHA");
const criptoBase64 = require("./criptoBase64");

const cripto = new encryptSHA();

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
      crypto.decrypt(this.password);
      await newUserSchema.save();
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = UserModel;
