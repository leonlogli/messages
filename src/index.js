var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(express.static("resources"));

global.__basedir = __dirname;

// Configuring the database
const dbConfig = require("./mongodb.config.js");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose
  .connect(dbConfig.url)
  .then(() => console.log("Successfully connected to MongoDB."))
  .catch((err) => {
    console.log("Could not connect to MongoDB.");
    process.exit();
  });

require("./user.route.js")(app);

// Create a Server
var server = app.listen(8081, function () {
  console.log("App listening at http://localhost:8081/");
});
