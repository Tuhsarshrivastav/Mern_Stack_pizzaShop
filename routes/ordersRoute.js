const express = require("express");
const router = express.Router();
const { orderController ,getOrderController,alluserorderController} = require("../controllers/orderController");

router.post("/placeorder", orderController);
router.post("/getuserorder", getOrderController);
router.get("/alluserorder", alluserorderController);
module.exports = router;
