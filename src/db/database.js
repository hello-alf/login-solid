const mongoose = require("mongoose");

const dbURI = "mongodb://localhost:27017/Demo";

mongoose.connect(dbURI, { useNewUrlParser: true });

const db = mongoose.connection;

db.on("error", (err) => {
  console.error(`err: ${err}`);
});

db.on("connected", (err, res) => {
  console.log("Connected to database");
});
