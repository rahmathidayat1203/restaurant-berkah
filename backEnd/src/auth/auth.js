const { PrismaClient } = require("@prisma/client");
const { body, validationResult } = require("express-validator");

const prisma = new PrismaClient();
const RegisterAuth = [
  body("first_name").notEmpty().withMessage("this field is required"),
  body("last_name").notEmpty().withMessage("this field is required"),
  body("email").isEmail().withMessage("enter valid email"),
  body("email")
    .custom(async (email) => {
      const user = await prisma.users.findFirst({
        where: {
          email: email,
        },
      });
      if (user) {
        throw new Error(Error);
      }
    })
    .withMessage("Email is already registered"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.mapped() });
    }
    next();
  },
];

const LoginAuth = [
  body("email").notEmpty().withMessage("this field is required"),
  body("password").notEmpty().withMessage("this field is required"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.mapped() });
    }
    next();
  },
];

module.exports = { RegisterAuth, LoginAuth };
