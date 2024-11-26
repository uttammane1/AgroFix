const express = require("express");
const { placeOrder, getOrderStatus, updateOrderStatus } = require("../controllers/orderController");

const router = express.Router();

router.post("/", placeOrder); // POST a new order
router.get("/:id", getOrderStatus); // GET order status by ID
router.put("/:id", updateOrderStatus); // UPDATE order status by ID

module.exports = router;
