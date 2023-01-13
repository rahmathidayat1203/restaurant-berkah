const express = require("express");
const route = express.Router();
const userController = require("../login/login");
const register = require("../register/register");
const validation = require("../auth/auth");
route.get("/", (req, res) => {
  res.send("hello world");
});
route.post("/user", userController.Login);
route.post("/user/register", validation.LoginAuth, register.Register);
module.exports = route;
