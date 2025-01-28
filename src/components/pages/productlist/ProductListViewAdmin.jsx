import React, { useEffect, useState } from "react";
import "./ProductListViewAdmin.css";
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

const ProductListViewAdmin = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/product")
            .then((response) => response.json())
            .then((data) => {
                console.log("Productos obtenidos:", data);
                setProductos(data);
            })
            .catch((error) => console.error("Error:", error));
    }, []);

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

    const handleUpdate = (id, updatedProduct) => {
        fetch(`http://localhost:8080/product/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedProduct),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error al editar el producto");
                }
                return response.json();
            })
            .then((updatedProduct) => {
                alert("Producto editado con éxito");
                setProductos(productos.map((producto) =>
                    producto.id === id ? updatedProduct : producto
                ));
            })
            .catch((error) =>
                console.error("Error al editar el producto:", error)
            );
    };

    return (
        <div className="admin-product-list-container">
            {/* Lista de productos */}
            {productos.map((producto) => (
                <div className="admin-product-item" key={producto.id}>
                    <div className="admin-product-id">{producto.id}</div>

                    <div className="admin-product-image-container">
                        <img
                            className="admin-product-image"
                            src={producto.url_image}
                            alt={producto.name}
                        />
                    </div>
                    <div className="admin-product-name">{producto.name}</div>
                    <div className="admin-product-description">{producto.description}</div>
                    <div className="admin-product-category">
                        {producto.category || "Sin categoría"}
                    </div>
                    <div className="admin-product-price">{producto.price} €</div>
                    <div
                        className={
                            producto.featured ? "availability" : "unavailable"
                        }
                    >
                        {producto.featured ? "Disponible" : "No disponible"}
                    </div>
                    <div className="admin-buttons">
                        <button
                            className="edit-button"
                            onClick={() =>
                                handleUpdate(producto.id, { ...producto, featured: true })
                            }
                        >
                            <PencilIcon className="h-5 w-5" />
                        </button>
                        <button
                            className="delete-button"
                            onClick={() => handleDelete(producto.id)}
                        >
                            <TrashIcon className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductListViewAdmin;
