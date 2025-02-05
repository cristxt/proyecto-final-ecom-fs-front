import Header from "../../shared/Header/Header";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useCart } from "../../../CartContext"; 
import axios from 'axios';
import "./CheckoutLayout.css";

const CheckoutLayout = () => {
    const { cart, removeFromCart, updateQuantity, clearCart } = useCart(); 
    const [products, setProducts] = useState([]);
    const [users, setUsers] = useState([]); 
    const [selectedUser, setSelectedUser] = useState(null);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        fetch("http://localhost:8080/user")
            .then((response) => response.json())
            .then((data) => {
                console.log("Usuarios obtenidos:", data);
                setUsers(Array.isArray(data) ? data : []);
            })
            .catch((error) => console.error("Error al obtener usuarios:", error));
    }, []);


    const handleUserChange = (event) => {
        const userId = event.target.value;
        setSelectedUser(userId);
        if (userId) {
            setLoading(true);
            fetch(`http://localhost:8080/user/${userId}/products`)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    return response.json();
                })
                .then((data) => {
                    console.log("Productos del usuario:", data);
                    setProducts(data);
                })
                .catch((error) => console.error("Error al obtener productos:", error))
                .finally(() => setLoading(false));
        }
    };

    const total = cart.reduce((sum, product) => sum + product.price * product.quantity, 0).toFixed(2);

    const purcharse = async () => {
        if (!selectedUser) {
            console.error("Debe seleccionar un usuario antes de finalizar la compra.");
            alert("Debe seleccionar un usuario antes de finalizar la compra.");
            return;
        }

        if (cart.length === 0) {
            console.error("El carrito está vacío.");
            alert("El carrito está vacío.");
            return;
        }

        const productsIds = cart.map(product => product.id);

        try {
            const response = await axios.post(`http://localhost:8080/user/${selectedUser}/product`, productsIds);
            if (response.status === 200) {
                console.log("Compra realizada con éxito.");
                alert("Compra realizada con éxito.");
                console.log("Vaciando carrito...");
                clearCart();
            } else {
                console.error("Error al finalizar la compra.");
            }
        } catch (error) {
            console.error("Error al realizar la compra:", error);
        }
            
    };

    const handleAddToCart = (product) => {
        addToCart(product);
    };

    return (
        <>
            <Header />
            <h1 className='title'>Checkout</h1>

            <div className='align-rigth'>
                <select onChange={handleUserChange} className='user-select'>
                    <option value="">Selecciona usuario</option>
                    {users.map((user) => (
                        <option key={user.id} value={user.id}>{user.name}</option>
                    ))}
                </select>
            </div>

            {selectedUser && loading ? (
                <p>Cargando productos...</p>
            ) : (
                <div className="cart-box">
                    <div className='colunm-titles colunms-display'>
                        <div className='colunm-products-title'><h2>Products</h2></div>
                        <div className='colunm-quantity-title'><h2>Quantity</h2></div>
                        <div className='colunm-price-title'><h2>Price</h2></div>
                    </div>

                    {cart.map((product, index) => (
                        <div key={product.id + '-' + index} className='product-item colunms-display'>
                            <div className='colunm-products'>
                                <button onClick={() => removeFromCart(product.id)} className='button-remove'>X</button>
                                <div className='product-box'>
                                    <img src={product.url_image || "/placeholder.svg"} alt={product.name} />
                                    <h3>{product.name}</h3>
                                </div>
                            </div>

                            <div className='colunm-quantity'>
                                <button onClick={() => updateQuantity(product.id, -1)} className='button-quantity'>-</button>
                                <span>{product.quantity}</span>
                                <button onClick={() => updateQuantity(product.id, 1)} className='button-quantity'>+</button>
                            </div>

                            <div className='colunm-price'>{product.price} €</div>
                        </div>
                    ))}

                    <div className='price-total align-rigth'><p>Total: {total} €</p></div>
                </div>
            )}


            <div className='container-checkout align-rigth'>
                <Button onClick={purcharse} className='button-checkout' variant="outline">Finalizar compra</Button>
            </div>
        </>
    );
};

export default CheckoutLayout;
