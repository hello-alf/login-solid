const express = require("express");
const app = express();
const db = require("./src/db/database");
const port = 3000;
const authenticationController = require("./src/controllers/autentication");
const userController = require("./src/controllers/user");

const loggerTxt = require("./src/models/loggerTxt");
const loggerService = require("./src/models/loggerService");

let logger = new loggerTxt();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.post("/login", (req, res) => {
  authenticationController.login(req, res, logger);
});

app.post("/register", (req, res) => {
  userController.register(req, res, logger);
});

app.post("/configuration", (req, res) => {
  const { loggerType } = req.body;
  console.log("loggerType", loggerType);

  if (loggerType === "file") {
    logger = new loggerTxt();
  } else if (loggerType === "external") {
    logger = new loggerService();
  }

  res.send(`logs changed: ${loggerType}`);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
