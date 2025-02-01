import React, { useState } from "react";
import "./ProductListViewAdmin.css";
import { PencilIcon, TrashIcon, CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";

const ProductListViewAdmin = ({ products, onDelete, onUpdate }) => {
    const [editingId, setEditingId] = useState(null);
    const [editedProduct, setEditedProduct] = useState({
        name: "",
        description: "",
        category:"",
        price: "",
        featured:"",
        
    });
   
    

    const handleEditClick = (producto) => {
        setEditingId(producto.id);
        setEditedProduct({ ...producto });
    };
    const handleCancel = () => {
        setEditingId(null); 
        setEditedProduct({}); 
    };

    const handleChange = (e, field) => {
        setEditedProduct({ ...editedProduct, [field]: e.target.value });
    };
    const handleChangeCheckbox = (e, field) => {
        setEditedProduct({ ...editedProduct, [field]: e.target.checked });
    };

    const handleSave = () => {
        onUpdate(editingId, editedProduct);
        setEditingId(null);
    };

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

                    {editingId === producto.id ? (
                        <>
                            <input
                                type="text"
                                value={editedProduct.name || ""}
                                onChange={(e) => handleChange(e, "name")}
                            />
                            <input
                                type="text"
                                value={editedProduct.description || ""}
                                onChange={(e) => handleChange(e, "description")}
                            />
                            <input
                                type="checkbox"
                                value={editedProduct.category || false}
                                onChange={(e) => handleChangeCheckbox(e, "category")}
                            />
                            <input
                                type="number"
                                value={editedProduct.price || ""}
                                onChange={(e) => handleChange(e, "price")}
                            />
                            <input
                                type="checkbox"
                                value={editedProduct.featured || false}
                                onChange={(e) => handleChangeCheckbox(e, "featured")}
                            />
                        </>
                    ) : (
                        <>
                            <div className="admin-product-name">{producto.name}</div>
                            <div className="admin-product-description">{producto.description}</div>
                            <div className="admin-product-category">{producto.category || "Sin categoría"}</div>
                            <div className="admin-product-price">{producto.price} €</div>
                            <div className={producto.featured ? "availability" : "unavailable"}>
                                {producto.featured ? "Disponible" : "No disponible"}
                            </div>
                        </>
                    )}

                    <div className="admin-buttons">
                        {editingId === producto.id ? (
                        <>
                            <button className="save-button" onClick={handleSave}>
                                <CheckIcon className="h-5 w-5" />
                            </button>
                            <button className="cancel-button" onClick={handleCancel}>
                                <XMarkIcon className="h-5 w-5" />
                            </button>
                        </>
                            
                        ) : (
                            <button className="edit-button" onClick={() => handleEditClick(producto)}>
                                <PencilIcon className="h-5 w-5" />
                            </button>
                        )}
                        <button className="delete-button" onClick={() => onDelete(producto.id)}>
                            <TrashIcon className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductListViewAdmin;
