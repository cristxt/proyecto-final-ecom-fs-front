import React, { useState, useEffect } from "react";
import { CreateProduct } from "../molecules/CreateProducts/CreateProduct";
import ProductListViewAdmin from "../pages/productlist/ProductListViewAdmin";

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
            <div className="create-product-container">
                <CreateProduct />
            </div>
            <div className="product-list-container">
                <h2>Lista de Productos</h2>
                <ProductListViewAdmin
                    products={products}
                    admin={true} 
                    onDelete={handleDelete} 
                />
            </div>
        </div>
    );
};

export default AdminLayout;
