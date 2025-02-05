import React, { useState, useEffect } from "react";
import { CreateProduct } from "../../molecules/CreateProducts/CreateProduct";
import ProductListViewAdmin from "../../molecules/productlist/ProductListViewAdmin";
import "./AdminLayout.css";
import HeaderAdmin from "../../shared/Header/HeaderAdmin";


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
                setProducts(products.map((product) =>
                    product.id === id ? updatedProduct : product
                ));
            })
            .catch((error) =>
                console.error("Error al editar el producto:", error)
            );
    };

    const handleCreate = (newProduct) => {
        setProducts([...products, newProduct]); 
    };

    return (
        <>

        <HeaderAdmin/>

        <div className="admin-container">
            
        <div className="admin-product-list-header">
            <div className="product-id">Id</div>
            <div className="product-image">Imagen</div>
            <div className="product-name">Nombre</div>
            <div className="product-description">Descripción</div>
            <div className="product-category">Categoría</div>
            <div className="product-price">Precio</div>
            <div className="product-availability">Disponibilidad</div>
            <div className="product-actions">Acciones</div>
        </div>
            <div className="create-product">
                <CreateProduct onProductCreated={handleCreate} />
            </div>

            <div className="admin-product-list-container">
                <ProductListViewAdmin 
                    products={products} 
                    onDelete={handleDelete} 
                    onUpdate={handleUpdate} 
                />
            </div>
        </div>
     </>

    );
};

export default AdminLayout;
