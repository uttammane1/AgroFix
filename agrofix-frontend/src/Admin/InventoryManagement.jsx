import React, { useState, useEffect } from "react";
import API from "../services/api";

const InventoryManagement = () => {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({ name: "", price: "" });

    useEffect(() => {
        API.get("/products").then((res) => setProducts(res.data));
    }, []);

    const addProduct = () => {
        API.post("/products", newProduct).then((res) => {
            setProducts([...products, res.data]);
            setNewProduct({ name: "", price: "" });
        });
    };

    return (
        <div>
            <h2>Inventory Management</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>{product.name} - ${product.price}</li>
                ))}
            </ul>
            <input
                type="text"
                placeholder="Name"
                value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            />
            <input
                type="number"
                placeholder="Price"
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            />
            <button onClick={addProduct}>Add Product</button>
        </div>
    );
};

export default InventoryManagement;
