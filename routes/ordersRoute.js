const express = require("express");
const router = express.Router();
const { orderController ,getOrderController} = require("../controllers/orderController");

router.post("/placeorder", orderController);
router.post("/getuserorder", getOrderController);
module.exports = router;
