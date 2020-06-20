
module.exports = function (app) {
  var express = require("express");
  var router = express.Router();
  const User = require('./user.model.js');

  var path = __basedir + "/views/";

  app.get("/", (req, res) => res.sendFile(path + "index.html"));

  app.get("/messages", (req, res) => res.sendFile(path + "messages.html"));

  // Save a User to MongoDB
  app.post("/api/users/save", (req, res) => {
    // Create a User
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message
    });

    // Save a User in the MongoDB
    user
      .save()
      .then((data) => res.send(data))
      .catch((err) => res.status(500).send({ message: err.message }));
  });

  // Retrieve all Users
  app.get("/api/users/all", (req, res) => {
    User.find()
      .then((users) => res.send(users))
      .catch((err) => res.status(500).send({ message: err.message }));
  });

  app.use("/", router);
};
