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
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.find({ email, password });
    if (user.length > 0) {
      const currentUser = {
        name: user[0].name,
        email: user[0].email,
        isAdmin: user[0].isAdmin,
        _id: user[0].id,
      };
      res.status(200).send(currentUser);
    } else {
      res.status(400).json({ message: "Login Failed" });
    }
  } catch (error) {
    res.status(404).json({ message: "something went wrong" });
  }
};
const getallusers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (error) {
    res.status(400).json({ message: error.stack });
  }
};
const deleteuser = async (req, res) => {
  const userid = req.body.userid;
  try {
    await User.findOneAndDelete({ _id: userid });
    res.status(200).send("User Deleted");
  } catch (error) {
    res.status(404).json({ message: error.stack });
  }
};
module.exports = { register, login, getallusers, deleteuser };
