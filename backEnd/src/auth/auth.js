const { PrismaClient } = require("@prisma/client");
const { body, validationResult } = require("express-validator");

const prisma = new PrismaClient();
const LoginAuth = [
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
    // console.log(req.body.email);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.mapped() });
    }
    next();
  },
];

module.exports = { LoginAuth };
