import React, { useState } from "react";
import { CreateButton } from "../../atoms/Button/CreateButton";
import { createProduct } from "../../../service/ApiService"; 
import FileInput from "../../atoms/FileInput/FileInput";  
import "./CreateProduct.css";

export function CreateProduct({ onProductCreated }) {
  const [url_image, setPicture] = useState(null);  
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [featured, setIsAvailable] = useState(true);
  const [category, setCategory] = useState(""); 

  const handleFileUpload = async (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('upload_preset', 'ml_default'); 

      try {
        const response = await fetch(
          'https://api.cloudinary.com/v1_1/dm0nmdo1s/image/upload',
          {
            method: 'POST',
            body: formData,
          }
        );
        const data = await response.json();
        setPicture(data.secure_url);  
      } catch (error) {
        console.error('Error subiendo la imagen:', error);
      }
    }
  };

  const handleCreateProduct = async () => {
    if (!url_image) {
      alert("Por favor, sube una imagen antes de crear el producto.");
      return;
    }

    const newProduct = {
      url_image,  
      name,
      description,
      price: parseFloat(price),
      featured,
      category,  
    };

    try {
      const createdProduct = await createProduct(newProduct);
      alert(`Producto creado con éxito: ${createdProduct.name}`);
      onProductCreated(createdProduct);
    } catch (error) {
      console.error("Error al crear el producto:", error.response?.data || error.message);
      alert("No se pudo crear el producto");
    }
  };

  return (
    <section className="create-container">
      <FileInput 
        accept="image/*" 
        onChange={handleFileUpload} 
        className="file-input"
        id="file-input" 
      />
      <input 
        type="text" 
        placeholder="Name" 
        id="name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        className="name-container" 
      />
      <input 
        type="text" 
        placeholder="Description" 
        id="description" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        className="description-container" 
      />
      <label className="category-container" htmlFor="category">
      <select 
        id="category" 
        value={category} 
        onChange={(e) => setCategory(e.target.value)} 
        className="category-select"
      >
        <option value="4">Plantas de exterior</option>
        <option value="2">Plantas de interior</option>
        <option value="5">Plantas pet friendly</option>
      </select>
      </label>
      <input 
        type="number" 
        id="price" 
        placeholder="Price" 
        value={price} 
        onChange={(e) => setPrice(e.target.value)} 
        className="price-container" 
      />
    <select 
    id="feature" 
    value={featured ? "Disponible" : "No disponible"} 
    onChange={(e) => setIsAvailable(e.target.value === "Disponible")} 
  >
    <option value="Disponible">Disponible</option>
    <option value="No disponible">No disponible</option>
    </select>

      
  

      <CreateButton 
        className="create-button" 
        onClick={handleCreateProduct}
        id="create-button"
      >
        Crear Producto
      </CreateButton>
    </section>
  );
}
