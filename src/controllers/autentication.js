const loggerTxt = require("../models/loggerTxt");

const { SERVER_ERROR } = require("./../enums/messages");
const userModel = require("../models/userModel");

const logger = new loggerTxt();

exports.login = async (req, res) => {
  try {
    const loginResponse = {
      authenticated: false,
      message: "Credenciales inválidas",
    };

    const user = new userModel();
    const response = await user.auth({ ...req.body });
    if (response === false) {
      logger.write(`Intento de inicio de sesión fallido: ${username}`);
      return res.status(401).json(loginResponse);
    }

    loginResponse.authenticated = true;
    loginResponse.message = "";

    logger.write(`Inicio de sesión correcto: ${req.body.username}`);
    res.status(200).json(loginResponse);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: SERVER_ERROR });
  }
};
