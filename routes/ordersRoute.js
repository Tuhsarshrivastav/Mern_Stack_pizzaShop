const express = require("express");
const router = express.Router();
const {
  orderController,
  getOrderController,
  alluserorderController,
  deliverorderController,
} = require("../controllers/orderController");

router.post("/placeorder", orderController);
router.post("/getuserorder", getOrderController);
router.get("/alluserorder", alluserorderController);
router.post("/deliverorder", deliverorderController);
module.exports = router;
