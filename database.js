const mongoose = require("mongoose");

const Connected = async () => {
  try {
    const res = mongoose.connect(process.env.db);
    console.log("db connected");
  } catch (error) {
    console.log("db error");
  }
};
module.exports = Connected;
