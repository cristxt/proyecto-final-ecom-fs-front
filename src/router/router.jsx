import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../components/Layout/AdminLayout.jsx";
import UserLayout from "../components/Layout/UserLayout.jsx";
import ProductListView from "../components/pages/productlist/ProductListView.jsx";
import CheckoutLayout from "../components/Layout/CheckoutLayout/CheckoutLayout.jsx"

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
            },
            {
                path: ":id",
                element: <div>Detalle del producto</div>,
            }
        ],
    },
    {
        path: "/checkout",
        element: <CheckoutLayout />,
    }
]);
