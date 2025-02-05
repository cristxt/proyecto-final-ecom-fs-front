import React from "react";
import "./ProductListView.css";

const ProductListView = ({ productos }) => {  
    return (
        <div>
            <h1>Descubre todas nuestras plantas</h1>
            <div className="cards-container">
                {productos.map((producto) => (
                    <div className="Card" key={producto.id}>
                        <div className="product-cover">
                            <img src={producto.url_image} alt={producto.name} />
                        </div>
                        <div className="product-info">
                            <p className="product-name">{producto.name}</p>
                            <p className="product-price">{producto.price} €</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductListView;
