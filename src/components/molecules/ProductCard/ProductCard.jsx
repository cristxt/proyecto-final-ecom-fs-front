import React, { useEffect, useState } from "react";
import "./ProductCard.css"

const ProductCard = () => {
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
            <ul>
                {productos.map((producto) => (
                    <li key={producto.id}>
                        <img src={producto.url_image} alt={producto.name} />
                        <p>{producto.name}</p>
                        <p>{producto.price} €</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductCard;
