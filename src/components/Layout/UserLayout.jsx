import React, { useEffect, useState } from "react";
import ProductListView from "../pages/productlist/ProductListView";
import Checkbox from "../atoms/CheckBox/checkbox";
import Header from "../shared/Header/Header";
import "../Layout/UserLayout.css";
import { getAllCategory } from "@/service/ApiService";

const UserLayout = () => {
    const [category, setCategory] = useState([]);
    const [categorySelected, setCategorySelected] = useState([]);
    const [priceRange, setPriceRange] = useState([]);

    const resetFilters = () => {
        setCategorySelected([]);
        setPriceRange([]);
    };

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const categories = await getAllCategory();
                setCategory(categories);
            } catch (error) {
                console.error("Error al obtener categorías:", error);
            }
        };

        fetchCategories();
    }, []);

    const handleCategoryChange = (value) => {
        setCategorySelected((prevSelected) => {
            if (prevSelected.includes(value)) {
                return prevSelected.filter((category) => category !== value);
            } else {
                return [...prevSelected, value];
            }
        });
    };

    const categoryOptions = category.map(cat => cat.name);

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
                            options={categoryOptions}
                            selectedValue={categorySelected}
                            onChange={handleCategoryChange}
                            name="categoria"
                        />

                        <Checkbox
                            title="Precio"
                            options={["Menos de 20€", "Entre 20€ y 40€", "Más de 40€"]}
                            selectedValue={priceRange}
                            onChange={setPriceRange}
                            name="precio"
                        />
                </div>

                <div className="product-list-container">
                    <ProductListView categoriaSeleccionada={categorySelected} />
                </div>
            </div>
        </>
    );
};

export default UserLayout;