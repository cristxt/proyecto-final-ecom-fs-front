import React, { useEffect, useState } from "react";
import "./ProductListViewAdmin.css";

const ProductListViewAdmin = () => {
    const [productos, setProductos] = useState([]);

    // Fetch de productos al montar el componente
    useEffect(() => {
        fetch("http://localhost:8080/product") 
            .then((response) => response.json())
            .then((data) => {
                console.log("Productos obtenidos:", data);  
                setProductos(data);
            })
            .catch((error) => console.error("Error:", error));
    }, []);

    // Elimina un producto
    const handleDelete = (id) => {
        fetch(`http://localhost:8080/product/${id}`, {
            method: "DELETE",
        })
            .then(() => {
                alert("Producto eliminado con éxito");
                setProductos(productos.filter((producto) => producto.id !== id));
            })
            .catch((error) => console.error("Error al eliminar el producto:", error));
    };

    return (
        <div className="admin-product-list-container">
            <h1>Lista de productos</h1>
            <table className="admin-product-table">
                <thead>
                    <tr>
                        <th>Imagen</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Categoría</th>
                        <th>Precio</th>
                        <th>Disponibilidad</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((producto) => (
                        <tr key={producto.id}>
                            <td>
                                <img
                                    className="admin-product-image"
                                    src={producto.url_image}
                                    alt={producto.name}
                                />
                            </td>
                            <td>{producto.name}</td>
                            <td>{producto.description}</td>
                            <td>{producto.category || "Sin categoría"}</td>
                            <td>{producto.price} €</td>
                            <td className={producto.featured ? "availability" : "unavailable"}>
                                {producto.featured ? "Disponible" : "No disponible"}
                            </td>
                            <td>
                                <div className="admin-buttons">
                                    <button
                                        className="edit-button"
                                        onClick={() => alert(`Editar producto: ${producto.name}`)}
                                    >
                                        Editar
                                    </button>
                                    <button
                                        className="delete-button"
                                        onClick={() => handleDelete(producto.id)}
                                    >
                                        Eliminar
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductListViewAdmin;
