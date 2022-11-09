import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Router } from "react-router-dom";
import App from "./App";
// import Card from "./Components/Card";
import Categories from "./Components/Categories";
import Products from "./Components/Products";
import Footer from "./Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // { path: "/", element: <Card /> },
      {
        path: "/category/:category",
        element: <Categories />,
      },
      {
        path: "/products/:products",
        element: <Products />,
      },
    ],
  },
  { path: "/", element: <Footer /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
