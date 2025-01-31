import React, { useEffect, useState } from "react";
import Header from "../../shared/Header/Header";
import { Button } from "@/components/ui/button";
import "./CheckoutLayout.css";

const CheckoutLayout = () => {
    const [users, setUsers] = useState([]);
    const [products, setProducts] = useState([]);
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
                    setProducts(Array.isArray(data) ? data.map(p => ({ ...p, quantity: 1 })) : []);
                })
                .catch((error) => console.error("Error al obtener productos:", error))
                .finally(() => setLoading(false));
        } else {
            setProducts([]);
        }
    };

    const updateQuantity = (id, delta) => {
        setProducts((prevProducts) =>
            prevProducts.map((product) =>
                product.id === id ? { ...product, quantity: Math.max(1, product.quantity + delta) } : product
            )
        );
    };

    const removeProduct = (id) => {
        setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
    };

    const total = products.reduce((sum, product) => sum + product.price * product.quantity, 0).toFixed(2);

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

            {loading ? (
                <p>Cargando productos...</p>
            ) : (
                <div className="cart-box">
                    <div className='colunm-titles colunms-display'>
                        <div className='colunm-products-title'><h2>Products</h2></div>
                        <div className='colunm-quantity-title'><h2>Quantity</h2></div>
                        <div className='colunm-price-title'><h2>Price</h2></div>
                    </div>

                    {products.map((product) => (
                        <div key={product.id} className='product-item colunms-display'>
                            <div className='colunm-products'>
                                <button onClick={() => removeProduct(product.id)} className='button-remove'>X</button>
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
                <Button className='button-checkout' variant="outline">Finalizar compra</Button>
            </div>
        </>
    );
};

export default CheckoutLayout;
