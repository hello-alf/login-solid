class CriptoBase64 {
  encrypt(value) {
    return Buffer.from(value).toString("base64");
  }

  decrypt(value) {
    return Buffer.from(value, "base64").toString();
  }
}

module.exports = CriptoBase64;
