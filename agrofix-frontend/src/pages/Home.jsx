import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const containerStyle = {
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#007bff", 
        color: "white",
        padding: "50px",
        borderRadius: "10px",
        margin: "20px auto",
        maxWidth: "2000px",
    };

    const titleStyle = {
        fontSize: "2.5rem",
        marginBottom: "20px",
    };

    const navStyle = {
        display: "flex",
        justifyContent: "center",
        gap: "20px",
    };

    const linkStyle = {
        textDecoration: "none",
        color: "#ffffff",
        fontSize: "1.2rem",
        border: "2px solid #ffffff",
        padding: "10px 20px",
        borderRadius: "5px",
        transition: "background-color 0.3s, color 0.3s",
    };

    const handleMouseEnter = (e) => {
        e.target.style.backgroundColor = "#ffffff";
        e.target.style.color = "#007bff";
    };

    const handleMouseLeave = (e) => {
        e.target.style.backgroundColor = "transparent";
        e.target.style.color = "#ffffff";
    };

    return (
        <div style={containerStyle}>
            <h1 style={titleStyle}>Welcome to Agrofix</h1>
            <nav style={navStyle}>
                <Link
                    to="/catalogue"
                    style={linkStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    View Products
                </Link>
                <Link
                    to="/order"
                    style={linkStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    Place Order
                </Link>
                <Link
                    to="/track"
                    style={linkStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    Track Order
                </Link>
            </nav>
        </div>
    );
};

export default Home;
