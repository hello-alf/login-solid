const logging = require("../utils/logging");
const security = require("../utils/security");
const { SERVER_ERROR } = require("./../enums/messages");
const userModel = require("../models/userModel");

exports.register = async (req, res) => {
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
