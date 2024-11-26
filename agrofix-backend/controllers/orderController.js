const Order = require("../models/Order");

// Place a new order
exports.placeOrder = async (req, res) => {
    try {
        const { product, quantity, name, contact, address } = req.body;
        const newOrder = new Order({ product, quantity, name, contact, address });
        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).json({ error: "Failed to place order" });
    }
};

// Get order status by ID
exports.getOrderStatus = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) {
            return res.status(404).json({ error: "Order not found" });
        }
        res.status(200).json({ status: order.status });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch order status" });
    }
};

// Update order status
exports.updateOrderStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const order = await Order.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true }
        );
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ error: "Failed to update order status" });
    }
};
