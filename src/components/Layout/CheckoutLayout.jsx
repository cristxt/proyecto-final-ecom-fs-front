import React from "react";

export const CheckoutLayout = () => {
    return (
        <section>
            <h1>Checkout</h1>
            <div><Dropdown/></div>
            <div>
                <div>
                    <div>
                        <h2>Products</h2>
                    </div>
                    <div>
                        <h2>Quantity</h2>
                    </div>
                    <div>
                        <h2>Price</h2>
                    </div>
                </div>
                <p>Total: { totalPrice }</p>
            </div>
        </section>
    );
};