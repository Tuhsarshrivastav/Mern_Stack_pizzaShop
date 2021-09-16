const User = require("../models/userModel");

const register = (req, res) => {
  const { email, name, password } = req.body;
  const newUser = new User({ name, email, password });
  try {
    newUser.save();
    res.status(200).json({
      success: true,
      message: "Register success",
    });
  } catch (error) {
    res.status(404).json({
      message: error,
    });
  }
};
module.exports = { register };
