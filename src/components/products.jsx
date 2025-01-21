import React, { useEffect, useState } from 'react';

const ProductosList = () => {
  // Estado para almacenar los productos
  const [productos, setProductos] = useState([]);

  // Usamos useEffect para hacer el fetch cuando el componente se monta
  useEffect(() => {
    fetch('http://localhost:8080/product')  // Asegúrate de que la URL sea correcta
      .then(response => response.json())   // Convertir la respuesta a JSON
      .then(data => setProductos(data))     // Guardamos los productos en el estado
      .catch(error => console.error('Error:', error)); // Manejo de errores
  }, []);  // El array vacío asegura que solo se ejecute una vez cuando se monta el componente

  return (
    <div>
      <h1>Lista de productos</h1>
      <ul>
        {/* Mapeamos los productos y los mostramos en la lista */}
        {productos.map((producto) => (
          <li key={producto.id}>
            {producto.nombre} - ${producto.precio}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductosList;
