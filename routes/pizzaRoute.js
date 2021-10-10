const express = require("express");
const router = express.Router();
const {
  getPizzas,
  addPizzas,
  getpizzabyid,
  updatepizza,
  deletepizza
} = require("../controllers/pizzasController");
router.get("/getAllPizzas", getPizzas);
router.post("/addpizza", addPizzas);
router.post("/getpizzabyid", getpizzabyid);
router.post("/updatepizza", updatepizza);
router.post("/deletepizza",deletepizza);

module.exports = router;
