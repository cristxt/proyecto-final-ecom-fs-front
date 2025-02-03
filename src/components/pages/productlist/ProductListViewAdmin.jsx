import React, { useState } from "react";
import "./ProductListViewAdmin.css";
import { PencilIcon, TrashIcon, CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";

const categories = [
    { id: 4, name: 'Plantas de exterior' },
    { id: 2, name: 'Plantas de interior' },
    { id: 5, name: 'Plantas pet friendly' }
];


const featured = [
    { boolean: true, name: 'Disponible' },
    { boolean: false, name: 'No disponible' }
];



const ProductListViewAdmin = ({ products, onDelete, onUpdate }) => {
    const [editingId, setEditingId] = useState(null);
    const [editedProduct, setEditedProduct] = useState({
        name: "",
        description: "",
        category_Id: "", 
        price: "",
        featured: true, 
    });

    const handleEditClick = (producto) => {
        setEditingId(producto.id);
        const category = categories.find(cat => cat.name === producto.category);
        setEditedProduct({
            ...producto,
            category_Id: category ? category.id : "", 
        });
    };

    const handleCancel = () => {
        setEditingId(null);
        setEditedProduct({});
    };

    const handleChange = (e, field) => {
        setEditedProduct({ ...editedProduct, [field]: e.target.value });
    };

    const handleChangeSelect = (e, field) => {
        setEditedProduct({ ...editedProduct, [field]: field === 'featured' ? e.target.value === 'true' : e.target.value });
    };

    const handleSave = () => {
        onUpdate(editingId, {
            ...editedProduct,
            featured: editedProduct.featured === true, // Explicitly ensure it's a boolean
        }); 
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
                            <textarea
                                className="editing-input-name"
                                value={editedProduct.name || ""}
                                onChange={(e) => handleChange(e, "name")}
                            />
                            <textarea
                                className="editing-input-description"
                                value={editedProduct.description || ""}
                                onChange={(e) => handleChange(e, "description")}
                            />
                            <select
                                className="editing-input-category"
                                value={editedProduct.category_Id || ""}
                                onChange={(e) => handleChangeSelect(e, "category_Id")}
                            >
                                {categories.map((category) => (
                                    <option key={category.id} value={category.id}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                            <input
                                type="number"
                                className="editing-input-price"
                                value={editedProduct.price || ""}
                                onChange={(e) => handleChange(e, "price")}
                            />
                            <select
                                className="editing-input-featured"
                                value={editedProduct.featured.toString()} 
                                onChange={(e) => handleChangeSelect(e, "featured")}
                            >
                                {featured.map((status) => (
                                    <option key={status.boolean} value={status.boolean.toString()}>
                                        {status.name}
                                    </option>
                                ))}
                            </select>
                        </>
                    ) : (
                        <>
                            <div className="admin-product-name">{producto.name}</div>
                            <div className="admin-product-description">{producto.description}</div>
                            <div className="admin-product-category">
                                {producto.category} {/* Show the category name */}
                            </div>
                            <div className="admin-product-price">{producto.price} €</div>
                            <div className="admin-product-feature">
                                {producto.featured ? 'Disponible' : 'No disponible'}
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
                            <>
                                <button className="edit-button" onClick={() => handleEditClick(producto)}>
                                    <PencilIcon className="h-5 w-5" />
                                </button>
                                <button className="delete-button" onClick={() => onDelete(producto.id)}>
                                    <TrashIcon className="h-5 w-5" />
                                </button>
                            </>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};


export default ProductListViewAdmin;
