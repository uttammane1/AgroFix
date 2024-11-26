const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    product: { type: String, required: true },
    quantity: { type: Number, required: true },
    name: { type: String, required: true },
    contact: { type: String, required: true },
    address: { type: String, required: true },
    status: { type: String, default: "Pending" }, // Possible values: Pending, In Progress, Delivered
});

module.exports = mongoose.model("Order", OrderSchema);
