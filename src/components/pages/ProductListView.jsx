import React, { useEffect, useState } from 'react';

const ProductosList = () => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/product')  
        .then(response => response.json())   
        .then(data => setProductos(data))     
        .catch(error => console.error('Error:', error)); 
    }, []);  
    return (
      <div>
        <h1>Lista de productos</h1>
        <ul>
        {}
        {productos.map((producto) => (
          <li key={producto.id}>
             {producto.name} - ${producto.precio}
          </li>
        ))}
      </ul>
    </div>
    );
};
export default ProductosList;
