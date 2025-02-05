import React, { useState, useEffect } from "react";
import ProductListView from "../../molecules/productlist/ProductListView";
import Checkbox from "../../atoms/CheckBox/checkbox";
import Header from "../../shared/Header/Header";
import "./UserLayout.css";

const UserLayout = () => {
    const categorias = [
        { id: 2, name:"Plantas de interior"},
        { id: 4, name:"Plantas de exterior"},
        { id: 5, name:"Pet-friendly"}
    ];
    const precios = ["Menos de 20€", "Entre 20€ y 40€", "Más de 40€"];
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
    const [rangoPrecio, setRangoPrecio] = useState("");
    const [productos, setProductos] = useState([]);

    const resetFilters = () => {
        setCategoriaSeleccionada("");
        setRangoPrecio("");
    };

    useEffect(() => {
        const fetchProducts = async () => {
            let url = "http://localhost:8080/product";
        
            if (categoriaSeleccionada) {
                url += `/category/${categoriaSeleccionada}`;
            } 
        
            if (rangoPrecio) {
                let minPrice = 0;
                let maxPrice = 100;
                console.log(rangoPrecio)
        
                if (rangoPrecio === "Menos de 20€") {
                    maxPrice = 20;
                } else if (rangoPrecio === "Entre 20€ y 40€") {
                    minPrice = 20;
                    maxPrice = 40;
                } else if (rangoPrecio === "Más de 40€") {
                    minPrice = 40;
                }
        
                if (url.includes('?')) {
                    url += `/price/range?minPrice=${minPrice}&maxPrice=${maxPrice}`;
                } else {
                    url += `/price/range?minPrice=${minPrice}&maxPrice=${maxPrice}`;
                }
            }
    
            console.log("URL de la solicitud:", url);
    
            const response = await fetch(url);
            const data = await response.json();
            setProductos(data);
        };
    
        fetchProducts();
    }, [rangoPrecio, categoriaSeleccionada]);

    return (
        <>
            <Header />
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
                        onChange={(id) => setCategoriaSeleccionada(id)} 
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
                    <ProductListView productos={productos} /> 
                </div>
            </div>
        </>
    );
};

export default UserLayout;
