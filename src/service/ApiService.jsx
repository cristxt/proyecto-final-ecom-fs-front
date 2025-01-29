import axios from "axios";

const apiProductUrl="http://localhost:8080/product"
const getAllProduct = async () => {
    const response = await axios.get(apiProductUrl);
    return response.data;
}

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
}

const updateProduct = async (id, product) => {
    const response = await axios.put(`${apiProductUrl}/${id}`, product);
    return response.data;
}

const deleteProduct = async (id) => {  
    const response = await axios.delete(`${apiProductUrl}/${id}`);
    return response.data;
};


const apiUserUrl="http://localhost:3000/user"
const getAllUser = async () => {
    const response = await axios.get(apiUserUrl);
    return response.data;
}

export {
    getAllProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    getAllUser
}