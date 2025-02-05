import React from "react";
import DetailProductCard from "../../molecules/DetailProductCard/DetailProductCard";
import Header from "../../shared/Header/Header";
import { useCart } from "../../../CartContext";

const ProductDetailLayout = () => {
  const { cart, addToCart } = useCart(); 

  return (
    <>
      <Header />
      <div>
        <DetailProductCard addToCart={addToCart} cart={cart} /> 
      </div>
    </>
  );
};

export default ProductDetailLayout;
