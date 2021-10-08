const pizzaModel = require("../models/pizzaModel");

const getPizzas = async (req, res) => {
  try {
    const pizzas = await pizzaModel.find({});
    res.send(pizzas);
  } catch (error) {
    res.json({ message: error });
  }
};
const addPizzas = async (req, res) => {
  const { pizza } = req.body;
  try {
    const newPizza = new pizzaModel({
      name: pizza.name,
      image: pizza.image,
      varients: ["small", "medium", "large"],
      description: pizza.description,
      category: pizza.category,
      prices: [pizza.prices],
    });
    await newPizza.save();
    res.json.status(201).send("New Pizza Added");
  } catch (error) {
    res.json({ message: error });
  }
};
module.exports = { getPizzas, addPizzas };
