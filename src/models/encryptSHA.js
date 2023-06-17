const { createHmac } = require("node:crypto");
const encryptI = require("./encryptInterface");

class EncryptSHA extends encryptI {
  constructor() {
    super();
    this.secret = "F7PEZ21wm8pBtqQmvGaqrmoeu53X4jNv3V9ohYAVqZ0vcdW";
  }

  encrypt(value) {
    const hash = createHmac("sha256", this.secret).update(value).digest("hex");
    return hash;
  }

  compare(plainText, textHashed) {
    if (textHashed === this.encrypt(plainText)) {
      return true;
    }
    return false;
  }
}

module.exports = EncryptSHA;
