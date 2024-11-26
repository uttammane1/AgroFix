import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductCatalogue from "./components/Buyer/ProductCatalogue";
import OrderForm from "./components/Buyer/OrderForm";
import OrderTracking from "./components/Buyer/OrderTracking";
import AdminDashboard from "./Admin/AdminDashboard";
import InventoryManagement from "./Admin/InventoryManagement";
import OrderManagement from "./Admin/OrderManagement";


function App() {
    return (
        <Router>
            <div>
                {/* Main App Container */}
                <Routes>
                    {/* Public Routes */}
                    <Route path="/" element={<Home />} />
                    <Route path="/catalogue" element={<ProductCatalogue />} />
                    <Route path="/order" element={<OrderForm />} />
                    <Route path="/track" element={<OrderTracking />} />

                    {/* Admin Routes */}
                    <Route path="/admin" element={<AdminDashboard />} />
                    <Route path="/admin/orders" element={<OrderManagement />} />
                    <Route path="/admin/inventory" element={<InventoryManagement />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
