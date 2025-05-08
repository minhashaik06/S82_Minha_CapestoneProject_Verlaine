const express = require("express");
const router = express.Router();
const {
  createProduct,
  getProducts,
  createIngredient,
  getIngredients,
} = require("../controllers/productIngredientController");


router.post("/product", createProduct);
//get endpoints
router.get("/products", getProducts);
router.post("/ingredient", createIngredient);
//get endpoints
router.get("/ingredients", getIngredients);

module.exports = router;