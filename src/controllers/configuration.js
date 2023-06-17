const logging = require("../utils/logging");
const security = require("../utils/security");

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const loginResponse = {
      authenticated: false,
      message: "Credenciales inválidas",
    };
    a;
    // const user = await User.findOne({ username });

    // if (!user) {
    //   return res.status(401).json({ message: 'Credenciales inválidas' });
    // }
    const user = "admin";

    if (user !== username) {
      logging.writeToLog(`Intento de inicio de sesión fallido: ${username}`);
      return res.status(401).json(loginResponse);
    }

    const isPasswordValid = await security.verifyPassword(
      password,
      "$2b$10$5ua1h9Cw/8SJVwuGB7FLcO2lYdi1UBgErgsUZ5rH/hMI0ebjh14z."
    );

    if (isPasswordValid === false) {
      logging.writeToLog(`Intento de inicio de sesión fallido: ${username}`);
      return res.status(401).json(loginResponse);
    }

    // const token = jwt.sign({ userId: user._id }, 'secretKey');

    loginResponse.authenticated = true;
    loginResponse.message = "";
    logging.writeToLog(`Inicio de sesión correcto: ${username}`);
    res.status(200).json(loginResponse);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error en el servidor" });
  }
};
