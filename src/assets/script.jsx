// script.js
const backendUrl = 'http://localhost:8080/product';

fetch(backendUrl)
  .then(response => response.json())  // Convertir la respuesta a JSON
  .then(data => {
    const lista = document.getElementById('productos-lista');
    // Crear un <li> para cada producto y añadirlo a la lista
    data.forEach(producto => {
      const item = document.createElement('li');
      item.textContent = `${producto.nombre} - ${producto.precio}`;  // Asumiendo que tus productos tienen nombre y precio
      lista.appendChild(item);
    });
  })
  .catch(error => {
    console.error('Error:', error);  // Manejar errores
  });
