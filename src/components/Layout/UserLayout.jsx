import React, { useState } from "react";
import ProductListView from "../pages/productlist/ProductListView";
import Checkbox from "../atoms/CheckBox/checkbox";
import Header from "../shared/Header/Header";
import "../Layout/UserLayout.css";

const UserLayout = () => {
    const categorias = ["Plantas de interior", "Plantas de exterior", "Pet-friendly"];
    const precios = ["Menos de 20€", "Entre 20€ y 40€", "Más de 40€"];
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
    const [rangoPrecio, setRangoPrecio] = useState("");

    const resetFilters = () => {
        setCategoriaSeleccionada("");
        setRangoPrecio("");
    };

    return (
        <>
            <Header/>
            <div className="user-layout">
                <div className="filters-container">
                    <div className="filters-header">
                        <h2>Filtros</h2>
                        <button onClick={resetFilters}>Deshacer</button>
                    </div>

                    <Checkbox
                        title="Categoría"
                        options={categorias}
                        selectedValue={categoriaSeleccionada}
                        onChange={setCategoriaSeleccionada}
                        name="categoria"
                    />

                    <Checkbox
                        title="Precio"
                        options={precios}
                        selectedValue={rangoPrecio}
                        onChange={setRangoPrecio}
                        name="precio"
                    />
                </div>

                <div className="product-list-container">
                    <h2>Bienvenido a la tienda de Plantas</h2>
                    <ProductListView />
                </div>
            </div>
        </>
    );
};

export default UserLayout;
