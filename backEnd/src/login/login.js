const { PrismaClient } = require("@prisma/client");
const md5 = require("md5");
const prisma = new PrismaClient();
const Login = async (req, res) => {
  const { email, password } = req.body;
  const login = await prisma.users.findFirst({
    where: {
      email: email,
      password: md5(password),
    },
  });
  console.log(login);
  if (login != null) {
    res.status(200).json({ data: login });
  } else {
    res.status(404).json({ data: login });
  }
};

module.exports = { Login };
