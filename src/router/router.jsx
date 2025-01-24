import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ProductListView from "../components/pages/productlist/ProductListView";
import AdminLayout from "../Layout/AdminLayout";
import UserLayout from "../Layout/UserLayout";

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
            }
        ],
    },
]);
