import axios from "axios";

const apiProductUrl = "http://localhost:8080/product";
const getAllProduct = async () => {
    const response = await axios.get(apiProductUrl);
    return response.data;
};

const createProduct = async (newProduct) => {
    if (!newProduct.name || !newProduct.price) {
        throw new Error("El nombre y el precio son requeridos");
    }

    try {
        const response = await axios.post(apiProductUrl, newProduct);
        return response.data;
    } catch (error) {
        console.error("Error creating product:", error);
        throw error;
    }
};

const updateProduct = async (id, updatedProduct) => {
    try {
        const response = await axios.put(`${apiProductUrl}/${id}`, updatedProduct);
        return response.data;
    } catch (error) {
        console.error("Error updating product:", error);
        throw error;
    }
};

const deleteProduct = async (id) => {
    try {
        const response = await axios.delete(`${apiProductUrl}/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting product:", error);
        throw error;
    }
};

const getProductByCategory = async (id) => {
    try {
        const response = await axios.get(`${apiProductUrl}/category/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error no hay productos de esa categoria:", error);
        throw error;
    }
};


const apiUserUrl = "http://localhost:8080/user";
const getAllUser = async () => {
    const response = await axios.get(apiUserUrl);
    return response.data;
};

const addProductsToUser = async (id, products) => {
    try {
        const response = await axios.post(`${apiUserUrl}/user/${id}`, {
            products: products
        });
        return response.status;
    } catch (error) {
        console.error("Error al agregar productos al usuario:", error);
        throw error;
    }
};


const apiCategoryUrl = "http://localhost:8080/category";
const getAllCategory = async () => {
    const response = await axios.get(apiCategoryUrl);
    return response.data;
};

export {
    getAllProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductByCategory,
    getAllUser,
    addProductsToUser,
    getAllCategory
};