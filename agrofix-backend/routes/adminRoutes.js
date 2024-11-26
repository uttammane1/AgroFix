const express = require("express");
const { getAllOrders } = require("../controllers/adminController");

const router = express.Router();

router.get("/orders", getAllOrders); // GET all orders

module.exports = router;
