import React, { useState } from "react"; 
import { DropdownBoolean } from "../../atoms/DropDownBoolean/DropdownBoolean";
import { DropdownMultiSelect } from "../../atoms/DropdownMultiSelect/DropdownMultiSelect";
import { DropdownMultiSelectAv } from "../../atoms/DropdownMultiSelectAv/DropdownMultiSelectAv";
import "./CreateProduct.css";
import { Input } from "@/components/ui/input";
import { CreateButton } from "../../atoms/Button/CreateButton";
import { createProduct } from "../../../service/ApiService";

export function CreateProduct() {
  const [picture, setPicture] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [isAvailable, setIsAvailable] = useState(true); 
  const [categories, setCategories] = useState([]); 
  const [availableSizes, setAvailableSizes] = useState([]); 

  const handleCreateProduct = async () => {
    const newProduct = {
      picture, 
      name,
      description,
      price: parseFloat(price),
      isAvailable,
      categories,
      availableSizes,
    };

    try {
      const createdProduct = await createProduct(newProduct);
      alert(`Producto creado con éxito: ${createdProduct.name}`);
      console.log(createdProduct);
    } catch (error) {
      console.error("Error al crear el producto:", error);
      alert("No se pudo crear el producto");
    }
  };

  return (
    <section className="create-container">
      <div className="param-container image-container">
        <Input
          id="picture"
          type="file"
          onChange={(e) => setPicture(e.target.files[0])} 
        />
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
      <div className="dropdown-container">
        <DropdownMultiSelect onChange={setCategories} /> 
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
        <DropdownMultiSelectAv onChange={setAvailableSizes} />
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
