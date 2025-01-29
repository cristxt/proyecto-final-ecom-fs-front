import React, { useState } from "react"; 
import { DropdownBoolean } from "../../atoms/DropDownBoolean/DropdownBoolean";
import { DropdownMultiSelectAv } from "../../atoms/DropdownMultiSelectAv/DropdownMultiSelectAv";
import { DropdownMultiSelectImg } from "../../atoms/DropdownMultiSelectImg/DropdownMultiSelectImg";
import "./CreateProduct.css";
import { Input } from "@/components/ui/input";
import { CreateButton } from "../../atoms/Button/CreateButton";
import { createProduct } from "../../../service/ApiService";

export function CreateProduct({ onProductCreated }) {
  const [url_image, setPicture] = useState(null);  
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [featured, setIsAvailable] = useState(true); 

  const handleCreateProduct = async () => {
    const newProduct = {
      url_image, 
      name, 
      description, 
      price: parseFloat(price), 
      featured, 
    };
  
    console.log("Datos enviados al backend:", newProduct); 
  
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
       <div className="dropdown-containerAv">
        <DropdownMultiSelectImg onChange={(selectedOption) => setPicture(selectedOption.imageUrl)} />
      </div>
      <div className="param-container name-container">
        <Input
          className="input-container"
          type="text"
          placeholder="Name"
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      </div>
      <div className="param-container description-container">
        <Input
          className="input-container"
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="param-container price-container">
        <Input
          className="input-container"
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className="dropdown-container">
        <DropdownBoolean onChange={setIsAvailable} /> 
      </div>
      <div className="dropdown-containerAv">
        <DropdownMultiSelectAv onChange={setIsAvailable} />
      </div>
      <div>
        <CreateButton
          className="create-button"
          onClick={handleCreateProduct} 
        >
          Crear Producto
        </CreateButton>
      </div>
    </section>
  );
}
