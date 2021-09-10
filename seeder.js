const mongoose = require("mongoose");
const Pizza = require("./models/pizzaModel");
const pizzas = require("./data/pizza-data");
const ConnectDb = require("./config/database");
require("dotenv").config();
//config
ConnectDb();

//import data
const importdata = async () => {
  try {
    await Pizza.deleteMany();
    const simpleData = pizzas.map((pizza) => {
      return { ...pizza };
    });
    await Pizza.insertMany(simpleData);
    console.log("Data imported");
    process.exit();
  } catch (error) {
    console.log(`${error}`);
    process.exit(1);
  }
};
const dataDestory = () => {};
if (process.argv[2] === "-d") {
  dataDestory();
} else {
  importdata();
}
