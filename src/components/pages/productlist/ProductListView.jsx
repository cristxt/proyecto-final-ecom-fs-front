// ProductListView.jsx
import React, { useEffect, useState } from "react";

const ProductListView = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/product') 
            .then(response => response.json())
            .then(data => {
                console.log("Productos obtenidos:", data);  // Verifica que los productos estén llegando
                setProductos(data);
            })
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div>
            <h1>Lista de productos</h1>
            <ul>
                {productos.map((producto) => (
                    <li key={producto.id}>
                        <img src={producto.image} alt={producto.name} />
                        <p>{producto.name}</p>
                        <p>{producto.price} €</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductListView;
