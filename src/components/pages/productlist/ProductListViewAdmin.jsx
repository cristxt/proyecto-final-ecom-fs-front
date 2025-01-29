import React from "react";
import "./ProductListViewAdmin.css";
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

const ProductListViewAdmin = ({ products, onDelete, onUpdate }) => {
    return (
        <div className="admin-product-list-container">
            {products.map((producto) => (
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
                    <div className={producto.featured ? "availability" : "unavailable"}>
                        {producto.featured ? "Disponible" : "No disponible"}
                    </div>
                    <div className="admin-buttons">
                        <button
                            className="edit-button"
                            onClick={() =>
                                onUpdate(producto.id, { ...producto, featured: !producto.featured })
                            }
                        >
                            <PencilIcon className="h-5 w-5" />
                        </button>
                        <button
                            className="delete-button"
                            onClick={() => onDelete(producto.id)}
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
