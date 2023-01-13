const { PrismaClient } = require("@prisma/client");
const { v4 } = require("uuid");
const uuidv4 = v4();
const md5 = require("md5");
const moment = require("moment/moment");
const prisma = new PrismaClient();

const Register = async (req, res) => {
  const { name, email, password, roleId } = req.body;
  const hash = md5(password);
  try {
    const register = await prisma.users.create({
      data: {
        id: uuidv4,
        name: name.toLowerCase(),
        email: email.toLowerCase(),
        password: hash,
        roleId: roleId,
        createdAt: moment().utc(true).toISOString(),
        updatedAt: moment().utc(true).toISOString(),
      },
    });
    console.log(register);
    res.status(200).json({ data: register });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Bad Request" });
  }
};
module.exports = { Register };
