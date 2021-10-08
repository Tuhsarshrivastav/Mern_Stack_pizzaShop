const express = require("express");
const router = express.Router();
const { getPizzas,addPizzas } = require("../controllers/pizzasController");
router.get("/getAllPizzas", getPizzas);
router.post("/addpizza", addPizzas);

module.exports = router;