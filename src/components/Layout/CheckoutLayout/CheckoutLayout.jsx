import React, { useState } from "react"
import Header from "../../shared/Header/Header";
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import "./CheckoutLayout.css"

const CheckoutLayout = () => {
    const [products, setCartProducts] = useState([
        {
            id: 1,
            name: "Double Bed & Dressing",
            image:
              "http://localhost:8080/images-database/Sansevieria_Moonshine.webp",
            price: 180,
            quantity: 1,
          },
          {
            id: 2,
            name: "Double Bed & Dressing",
            image:
              "http://localhost:8080/images-database/Sansevieria_Moonshine.webp",
            price: 180,
            quantity: 1,
          },
          {
            id: 3,
            name: "Double Bed & Dressing",
            image:
              "http://localhost:8080/images-database/Sansevieria_Moonshine.webp",
            price: 180,
            quantity: 1,
          },
          {
            id: 4,
            name: "Double Bed & Dressing",
            image:
              "http://localhost:8080/images-database/Sansevieria_Moonshine.webp",
            price: 180,
            quantity: 1,
          },
    ]);

      const updateQuantity = (id, delta) => {
        setCartProducts(
          products.map((product) =>
            product.id === id ? { ...product, quantity: Math.max(1, product.quantity + delta) } : product,
          ),
        )
      }

      const removeProduct = (id) => {
        setCartProducts(products.filter((product) => product.id !== id))
      }

      const total = products.reduce((sum, product) => sum + product.price * product.quantity, 0)

    return (
        <>
            <Header/>
            <h1 className='title'>Checkout</h1>

            <div className='align-left'>
                <select className='user-select'>
                    <option value="">Selecciona usuario</option>
                    <option value="user1">Usuario 1</option>
                    <option value="user2">Usuario 2</option>
                </select>
            </div>

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
                                <img src={product.image || "/placeholder.svg"} alt={product.name} />
                                <h3>{product.name}</h3>
                            </div>
                        </div>

                        <div className='colunm-quantity'>
                          <button onClick={() => updateQuantity(product.id, -1)} className='button-quantity'>-</button>
                            <span>{product.quantity}</span>
                          <button onClick={() => updateQuantity(product.id, 1)} className='button-quantity'>+</button>
                        </div>

                        <div className='colunm-price'>{product.price}€</div>
                    </div>
                ))}

                <div className='price-total align-left'><p>Total: {total}€</p></div>
            </div>

            <div className='container-checkout align-left'>
                <Button className='button-checkout' variant="outline">Finalizar compra</Button>
            </div>
        </>
    );
};

export default CheckoutLayout;