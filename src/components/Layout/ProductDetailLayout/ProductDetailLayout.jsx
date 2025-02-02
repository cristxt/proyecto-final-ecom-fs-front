import React, { useState } from "react";
import DetailProductCard from "../../molecules/DetailProductCard";
import Header from "../../shared/Header/Header";

const ProductDetailLayout = () => {


    return (
        <>
          <Header/>
          
            <div className="product-detail-layout">
            <DetailProductCard/>

            </div>
        </>
    );
};

export default ProductDetailLayout;
