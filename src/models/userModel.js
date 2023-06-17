const UserSchema = require("../mongoSchemas/userSchema");

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
      newUserSchema.password = this.password;
      await newUserSchema.save();
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = UserModel;
