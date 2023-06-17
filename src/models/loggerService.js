const axios = require("axios");
const loggerInterface = require("./loggerInterface");

class LoggerService extends loggerInterface {
  constructor() {
    super();
    this.endpoint = "http://logger.odontoemergencias.com/api/log";
  }

  async write(data) {
    console.log("logger service");
    try {
      const response = await axios.post(this.endpoint, {
        log_value: data,
      });

      console.log("response:", response.status);
    } catch (error) {
      console.error("Error al hacer la solicitud:", error.response.data);
    }
  }
}

module.exports = LoggerService;
