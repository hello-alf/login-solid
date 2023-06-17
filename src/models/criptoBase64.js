class CriptoBase64 {
  encrypt(value) {
    return Buffer.from(value).toString("base64");
  }

  decrypt(value) {
    return Buffer.from(value, "base64").toString();
  }

  compare(plainText, textHashed) {
    if (textHashed === this.decrypt(plainText)) {
      return true;
    }
    return false;
  }
}

module.exports = CriptoBase64;
