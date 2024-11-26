import React, { useState } from "react";
import API from "../../services/api";

const OrderForm = () => {
    const [formData, setFormData] = useState({
        product: "",
        quantity: "",
        name: "",
        contact: "",
        address: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        API.post("/orders", formData).then(() => alert("Order placed successfully!"));
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Place an Order</h2>
            <input name="product" placeholder="Product Name" onChange={handleChange} />
            <input name="quantity" placeholder="Quantity" onChange={handleChange} />
            <input name="name" placeholder="Name" onChange={handleChange} />
            <input name="contact" placeholder="Contact" onChange={handleChange} />
            <input name="address" placeholder="Address" onChange={handleChange} />
            <button type="submit">Place Order</button>
        </form>
    );
};

export default OrderForm;
