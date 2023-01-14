const { PrismaClient } = require("@prisma/client");
const { v4 } = require("uuid");
const moment = require("moment");
const uuidv4 = v4();
const prisma = new PrismaClient();
const RegisterFood = async (req, res) => {
  const { food_name, price_food, quantity_food } = req.body;
  let foods;
  const { path } = req.file;
  try {
    foods = await prisma.food.create({
      data: {
        foodId: uuidv4,
        foodName: food_name,
        priceFood: parseFloat(price_food),
        quantityFood: parseInt(quantity_food),
        foodImagePath: path,
        createdAt: moment().utc(true).toISOString(),
        updatedAt: moment().utc(true).toISOString(),
      },
    });

    res.status(200).json({ data: foods });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
module.exports = { RegisterFood };
