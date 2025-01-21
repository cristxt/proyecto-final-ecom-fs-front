import React, { useEffect, useState } from 'react';
import axios from 'axios';  // Importa Axios

function Productos() {
  const [productos, setProductos] = useState([]);  // Estado para almacenar los productos
  const [error, setError] = useState(null);  // Estado para manejar errores

  // Usamos useEffect para hacer la solicitud cuando el componente se monte
  useEffect(() => {
    // Realizamos la solicitud GET usando Axios
    axios.get('http://localhost:8080/product')  // URL de tu backend
      .then(response => {
        setProductos(response.data);  // Guardamos los productos en el estado
      })
      .catch(error => {
        setError(error.message);  // Si hay error, lo almacenamos en el estado
        console.error('Error al obtener productos:', error);
      });
  }, []);  // El array vacío asegura que solo se haga la solicitud una vez al montar el componente

  return (
    <div>
      <h2>Productos</h2>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}  {/* Mostrar mensaje de error si hay */}
      <ul>
        {productos.length > 0 ? (
          productos.map(producto => (
            <li key={producto.id}>
              {producto.nombre} - ${producto.precio}
            </li>
          ))
        ) : (
          <p>No hay productos disponibles</p>  {/* Mensaje si no hay productos */}
        )}
      </ul>
    </div>
  );
}

export default Productos;
