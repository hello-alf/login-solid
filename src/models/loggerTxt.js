const fs = require("fs");
const loggerInterface = require("./loggerInterface");

class LoggerTxt extends loggerInterface {
  constructor() {
    super();
    this.path = "logs.txt";
  }

  write(data) {
    console.log("write");
    const logMessage = `[${new Date().toISOString()}] ${data}\n`;

    fs.appendFile(this.path, logMessage, (err) => {
      if (err) {
        console.error("Error al escribir en el archivo de registro:", err);
      }
    });
  }
}

module.exports = LoggerTxt;
