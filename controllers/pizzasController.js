const pizzaModel = require("../models/pizzaModel");

const getPizzas = async (req, res) => {
  try {
    const pizzas = await pizzaModel.find({});
    res.send(pizzas);
  } catch (error) {
    res.json({ message: error });
  }
};
const getpizzabyid = async (req, res) => {
  const pizzaId = req.body.pizzaId;
  try {
    const pizza = await pizzaModel.findOne({ _id: pizzaId });
    res.send(pizza);
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
    res.status(201).send("New Pizza Added");
  } catch (error) {
    res.json({ message: error });
  }
};
const updatepizza = async (req, res) => {
  const { updatedPizza } = req.body;

  try {
    const pizza = await pizzaModel.findOne({ _id: updatedPizza._id });
    (pizza.name = updatedPizza.name),
      (pizza.description = updatedPizza.description),
      (pizza.image = updatedPizza.image),
      (pizza.category = updatedPizza.category),
      (pizza.prices = [updatedPizza.prices]);
    await pizza.save();
    res.status(200).send("Pizza Update Success");
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
const deletepizza = async (req, res) => {
  const { pizzaId } = req.body;
  try {
    await pizzaModel.findOneAndDelete({ _id: pizzaId });
    res.status(200).send("Pizza Deleted");
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
module.exports = {
  getPizzas,
  addPizzas,
  getpizzabyid,
  updatepizza,
  deletepizza,
};
