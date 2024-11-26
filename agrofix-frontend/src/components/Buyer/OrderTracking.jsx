import React, { useState } from "react";
import API from "../../services/api";

const OrderTracking = () => {
    const [orderId, setOrderId] = useState("");
    const [status, setStatus] = useState("");

    const handleTrack = () => {
        API.get(`/orders/${orderId}`).then((res) => setStatus(res.data.status));
    };

    return (
        <div>
            <h2>Track Your Order</h2>
            <input placeholder="Order ID" onChange={(e) => setOrderId(e.target.value)} />
            <button onClick={handleTrack}>Track</button>
            <p>Status: {status}</p>
        </div>
    );
};

export default OrderTracking;
