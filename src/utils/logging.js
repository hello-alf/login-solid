const fs = require("fs");

const writeToLog = (message) => {
  const logMessage = `[${new Date().toISOString()}] ${message}\n`;

  fs.appendFile("logs.txt", logMessage, (err) => {
    if (err) {
      console.error("Error al escribir en el archivo de registro:", err);
    }
  });
};

module.exports = {
  writeToLog,
};
