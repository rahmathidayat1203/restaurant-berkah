const express = require("express");
const route = express.Router();
const userController = require("../login/login");
const register = require("../register/user");
const registerFood = require("../register/food");
const validation = require("../auth/auth");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/assets/images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

route.get("/", (req, res) => {
  res.send("hello world");
});
route.post("/user", validation.LoginAuth, userController.Login);
route.post("/user/register", validation.RegisterAuth, register.User);
route.post("/admin/user/register", validation.RegisterAuth, register.UserAdminRegister);
route.post("/food/register", upload.single("images"), registerFood.RegisterFood);
module.exports = route;
