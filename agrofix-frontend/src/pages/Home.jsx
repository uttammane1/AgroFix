import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
    <div>
        <h1>Welcome to Agrofix</h1>
        <nav>
            <Link to="/catalogue">View Products</Link>
            <Link to="/order">Place Order</Link>
            <Link to="/track">Track Order</Link>
        </nav>
    </div>
);

export default Home;
