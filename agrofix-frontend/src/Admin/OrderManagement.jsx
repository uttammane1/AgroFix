import React, { useState, useEffect } from "react";
import API from "./../services/api";

const OrderManagement = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        API.get("/admin/orders").then((res) => setOrders(res.data));
    }, []);

    const updateStatus = (id, status) => {
        API.put(`/orders/${id}`, { status }).then(() => {
            setOrders((prevOrders) =>
                prevOrders.map((order) =>
                    order.id === id ? { ...order, status } : order
                )
            );
        });
    };

    return (
        <div>
            <h2>Order Management</h2>
            <ul>
                {orders.map((order) => (
                    <li key={order.id}>
                        {order.product} - {order.status}
                        <button onClick={() => updateStatus(order.id, "In Progress")}>
                            In Progress
                        </button>
                        <button onClick={() => updateStatus(order.id, "Delivered")}>
                            Delivered
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrderManagement;
