import React, { useEffect, useState } from "react";
import API from "../../services/api";

const ProductCatalogue = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        API.get("/products").then((res) => setProducts(res.data));
    }, []);

    return (
        <div>
            <h1>Product Catalogue</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - ${product.price}/unit
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductCatalogue;
