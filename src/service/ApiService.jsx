import axios from "axios";

const apiProductUrl="http://localhost:3000/product"
const getAllProduct = async () => {
    const response = await axios.get(apiProductUrl);
    return response.data;
}

const createProduct = async (newProduct) => {
    const response = await axios.post(apiProductUrl, newProduct);
    return response.data;
}

const updateProduct = async (id, product) => {
    const response = await axios.put(`${apiProductUrl}/${id}`, product);
    return response.data;
}

const deleteProduct = async (id, product) => {
    const response = await axios.delete(`${apiProductUrl}/${id}`, product);
    return response.data;
}


export {
    getAllProduct,
    createProduct,
    updateProduct,
    deleteProduct,
}