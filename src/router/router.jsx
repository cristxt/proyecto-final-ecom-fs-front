import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../components/Layout/AdminLayout/AdminLayout.jsx";
import UserLayout from "../components/Layout/UserLayout/UserLayout.jsx";
import CheckoutLayout from "../components/Layout/CheckoutLayout/CheckoutLayout.jsx";
import ProductListView from "../components/molecules/productlist/ProductListView.jsx";
import ProductDetailLayout from "../components/Layout/ProductDetailLayout/ProductDetailLayout.jsx";
export const router = createBrowserRouter([
    {
        path: "/admin",
        element: <AdminLayout />,
    },
    {
        path: "/plantas",
        element: <UserLayout />,
        children: [
            {
                path: "",
                element: <ProductListView />,
            }
        ],
    },
    {
        path: "/plantas/:id",
        element: <ProductDetailLayout />, 
            
        
    },
    {
        path: "/checkout",
        element: <CheckoutLayout />,
    }
]);
