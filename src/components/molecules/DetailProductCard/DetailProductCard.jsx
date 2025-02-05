import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../../CartContext";

import "./DetailProductCard.css";

const DetailProductCard = () => {
  const { id } = useParams(); 
  const [producto, setProducto] = useState(null); 
  const [loading, setLoading] = useState(true); 

  const { addToCart, cart, updateQuantity } = useCart();  

  useEffect(() => {
    fetch(`http://localhost:8080/product/${id}`)
      .then(response => response.json())
      .then(data => {
        console.log("Producto obtenido:", data);
        setProducto({ ...data, quantity: 1 }); 
      })
      .catch(error => console.error('Error:', error))
      .finally(() => setLoading(false)); 
  }, [id]);

  if (loading) return <p>Cargando...</p>; 
  if (!producto) return <p>Producto no encontrado</p>; 

  const handleAddToCart = () => {
    const existingProduct = cart.find(item => item.id === producto.id);
  
    if (existingProduct) {
      updateQuantity(existingProduct.id, producto.quantity);  
    } else {
      addToCart(producto);  
    }
  };

  const handleQuantityChange = (amount) => {
    if (producto.quantity + amount > 0) {
      setProducto(prevProducto => ({ 
        ...prevProducto, 
        quantity: prevProducto.quantity + amount 
      }));
    }
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
              <button onClick={() => handleQuantityChange(-1)} className='button-quantity'>-</button>
              <span>{producto.quantity}</span> 
              <button onClick={() => handleQuantityChange(1)} className='button-quantity'>+</button>
            </div>
            <div className='colunm-add-to-cart'>
              <button onClick={handleAddToCart}>Añadir al carrito</button> 
            </div>
          </section>
        </section>
      </article>
    </div>
  );
};

export default DetailProductCard;
