import React, { useEffect, useState } from "react";
import "./ProductListView.css";

const ProductListView = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/product') 
            .then(response => response.json())
            .then(data => {
                console.log("Productos obtenidos:", data);  
                setProductos(data);
            })
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div>
            <h1>Lista de productos</h1>
            <div className="cards-container">
                {productos.map((producto) => (
                    <div className="Card" key={producto.id}>
                        <div className="product-cover">
                            <img src={producto.url_image} alt={producto.name} />
                        </div>
                        <div className="product-info">
                            <p className="product-title">{producto.name}</p>
                            <p className="product-price">{producto.price} €</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductListView;
