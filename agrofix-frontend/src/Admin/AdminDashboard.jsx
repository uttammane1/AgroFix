import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => (
    <div>
        <h1>Admin Dashboard</h1>
        <nav>
            <Link to="/admin/orders">Order Management</Link>
            <Link to="/admin/inventory">Inventory Management</Link>
        </nav>
    </div>
);

export default AdminDashboard;
