import React, { useEffect, useState } from "react";
import { getAllProduct, getProductByCategory } from "@/service/ApiService";
import "./ProductListView.css";

const ProductListView = ({ categoryId }) => {
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                let data;
                if (categoryId) data = await getProductByCategory(categoryId);
                else data = await getAllProduct();

                console.log("Productos obtenidos:", data);
                setProductos(data);
            } catch (error) {
                console.error('Error al obtener productos:', error);
                setError(error);
            }
        };

        fetchProducts();
    }, [categoryId]);

    if (error) return <div>Error: {error.message}</div>;

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
