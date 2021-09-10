const express = require("express");
const router = express.Router();
const { getPizzas } = require("../controllers/pizzasController");
router.get("/getAllPizzas", getPizzas);

module.exports = router;
