const pizzaModel = require("../models/pizzaModel");

const getPizzas = async (req, res) => {
  try {
    const pizzas = await pizzaModel.find({});
    res.send(pizzas);
  } catch (error) {
    res.json({ message: error });
  }
};
module.exports = { getPizzas };
