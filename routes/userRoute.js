const express = require("express");
const router = express.Router();
const { register,login,getallusers,deleteuser } = require("../controllers/usersController");
router.post("/register", register);
router.post('/login',login)
router.get('/getallusers',getallusers)
router.get('/deleteuser',deleteuser)

module.exports = router;
