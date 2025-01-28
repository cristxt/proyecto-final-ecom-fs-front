import React, { useState, useEffect } from "react";
import { CreateProduct } from "../molecules/CreateProducts/CreateProduct";
import ProductListViewAdmin from "../pages/productlist/ProductListViewAdmin"; // Importamos el ProductListViewAdmin
import "../Layout/AdminLayout.css";

// Importar los iconos
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';

const AdminLayout = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/product") 
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error al obtener los productos:", error));
    }, []);

    const handleDelete = (id) => {
        fetch(`http://localhost:8080/product/${id}`, { method: "DELETE" })
            .then(() => {
                setProducts(products.filter((product) => product.id !== id));
                alert("Producto eliminado con éxito");
            })
            .catch((error) => console.error("Error al eliminar el producto:", error));
    };

    return (
        <div className="admin-container">
            <h1>Panel de Administración</h1>
            
            {/* Mostrar CreateProduct dentro de un contenedor */}
            <div className="admin-product-list-header">
                <div>Id</div>
                <div>Imagen</div>
                <div>Nombre</div>
                <div>Descripción</div>
                <div>Categoría</div>
                <div>Precio</div>
                <div>Disponibilidad</div>
                <div>Acciones</div>
            </div>
            <div className="create-product-container">
                <CreateProduct />
            </div>

            {/* Mostrar los encabezados de la lista de productos */}


            {/* Mostrar la lista de productos usando ProductListViewAdmin */}
            <div className="admin-product-list-container">
                <ProductListViewAdmin 
                    products={products} // Pasamos los productos a ProductListViewAdmin
                    onDelete={handleDelete} // Pasamos la función para eliminar productos
                />
            </div>
        </div>
    );
};

export default AdminLayout;
