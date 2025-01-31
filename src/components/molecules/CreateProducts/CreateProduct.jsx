import React, { useState } from "react";
import { CreateButton } from "../../atoms/Button/CreateButton";
import { createProduct } from "../../../service/ApiService"; 
import FileInput from "../../atoms/FileInput/FileInput";  // Importamos el nuevo FileInput
import "./CreateProduct.css";

export function CreateProduct({ onProductCreated }) {
  const [url_image, setPicture] = useState(null);  
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [featured, setIsAvailable] = useState(true);  

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
      <div className="file-input">
        <FileInput
          label="Selecciona una imagen"
          accept="image/*"
          onChange={handleFileUpload}
        />
      </div>

      <div className="name-container">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="description-container">
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="price-container">
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      <div className="featured-container">
        <label>
          Disponible
          <input
            type="checkbox"
            checked={featured}
            onChange={(e) => setIsAvailable(e.target.checked)}
          />
        </label>
      </div>

      <CreateButton className="create-button" onClick={handleCreateProduct}>
        Crear Producto
      </CreateButton>
    </section>
  );
}
