const bcrypt = require("bcrypt");
const encryptI = require("./encryptInterface");

class EncryptSHA extends encryptI {
  constructor() {
    super();
    this.salt = 10;
  }

  encrypt(value) {
    const salt = bcrypt.genSaltSync(this.salt);
    const hash = bcrypt.hashSync(value, salt);
    return hash;
  }
}

module.exports = EncryptSHA;
