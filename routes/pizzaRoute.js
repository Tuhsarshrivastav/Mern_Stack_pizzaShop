const express = require("express");
const router = express.Router();
const { getPizzas,addPizzas,getpizzabyid } = require("../controllers/pizzasController");
router.get("/getAllPizzas", getPizzas);
router.post("/addpizza", addPizzas);
router.post("/getpizzabyid", getpizzabyid );

module.exports = router;