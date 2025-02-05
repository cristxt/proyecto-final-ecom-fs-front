import React from "react";
import { Link } from 'react-router-dom'; 
import "./ProductListView.css";

const ProductListView = ({ productos }) => {  
    return (
        <div>
            <h1>Descubre todas nuestras plantas</h1>
            <div className="cards-container">
                {productos.map((producto) => (
                    <div className="Card" key={producto.id}>
                        <Link to={`/plantas/${producto.id}`} className="product-link"> 
                            <div className="product-cover">
                                <img src={producto.url_image} alt={producto.name} />
                            </div>
                            <div className="product-info">
                                <p className="product-name">{producto.name}</p>
                                <p className="product-price">{producto.price} €</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductListView;