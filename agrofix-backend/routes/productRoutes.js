const express = require("express");
const { getAllProducts, addProduct, deleteProduct } = require("../controllers/productController");

const router = express.Router();

router.get("/", getAllProducts); // GET all products
router.post("/", addProduct); // POST a new product
router.delete("/:id", deleteProduct); // DELETE a product by ID

module.exports = router;
