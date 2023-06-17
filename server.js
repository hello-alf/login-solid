const express = require("express");
const app = express();
const db = require("./src/db/database");
const port = 3000;
const authenticationController = require("./src/controllers/autentication");
const userController = require("./src/controllers/user");
const configurationController = require("./src/controllers/configuration");

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.post("/login", (req, res) => {
  authenticationController.login(req, res);
});

app.post("/register", (req, res) => {
  userController.register(req, res);
});

app.post("/configuration", (req, res) => {
  configurationController.changeParameters(req, res);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
