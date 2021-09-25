//dependencys
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

//imports
const Database = require("./config/database");

//db config
Database();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//routes
app.use("/api/pizzas", require("./routes/pizzaRoute"));
app.use("/api/users", require("./routes/userRoute"));
app.use("/api/orders", require("./routes/ordersRoute"));

//port
const PORT = process.env.PORT || 5000;

//server listen
app.listen(PORT, () => {
  console.log(`Server is running : ${PORT}`);
});
