const { SERVER_ERROR } = require("./../enums/messages");
const loggerTxt = require("../models/loggerTxt");
const userModel = require("../models/userModel");

exports.register = async (req, res, logger) => {
  try {
    const userResponse = {
      message: "Usuario creado",
    };

    const user = new userModel();
    await user.register({ ...req.body });
    console.log("user Controller", user);

    res.status(201).json(userResponse);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: SERVER_ERROR });
  }
};
