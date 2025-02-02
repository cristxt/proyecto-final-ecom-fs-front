import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../molecules/DetailProductCard.css";

const DetailProductCard = () => {
    const { id } = useParams(); 
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:8080/product/${id}`) 
            .then(response => response.json())
            .then(data => {
                console.log("Producto obtenido:", data);
                setProducto(data);
            })
            .catch(error => console.error('Error:', error))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <p>Cargando...</p>;
    if (!producto) return <p>Producto no encontrado</p>;

    const updateQuantity = (id, delta) => {
        setProducto((prevProducto) =>
            prevProducto.id === id ? { ...prevProducto, quantity: Math.max(1, prevProducto.quantity + delta) } : prevProducto
        );
    };

    return (
        <div className="detail-product-container">
            <article className="product-card">
                <section className="left-block">
                    <img src={producto.url_image} alt={producto.name} />
                </section>
                <section className="right-block">
                    <section className="right-block-info">
                        <p className="product-name-detail">{producto.name}</p>
                        <p className="product-price-detail">{producto.price} €</p>
                        <p className="product-description-detail">{producto.description}</p>
                    </section>
                    <section className="right-block-actions">
                        <div className='colunm-quantity'>
                                <button onClick={() => updateQuantity(producto.id, -1)} className='button-quantity'>-</button>
                                <span>{producto.quantity}</span>
                                <button onClick={() => updateQuantity(producto.id, 1)} className='button-quantity'>+</button>
                        </div>

                    </section>
                </section>
            </article>
        </div>
    );
};

export default DetailProductCard;
