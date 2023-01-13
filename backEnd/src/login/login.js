const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const Login = async (req, res) => {
  const { email, password } = req.body;
  const login = await prisma.users.findFirst({
    where: {
      email: email,
      password: password,
    },
  });
  if (login != null) {
    res.status(200).json({ data: login });
  } else {
    res.status(400).json({ data: login });
  }
};

module.exports = { Login };
